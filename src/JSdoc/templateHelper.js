const helper = require("jsdoc/util/templateHelper");
const path = require("path");
const fs = require("fs");

const templateHelper = (module.exports = {});

const typeRegex = {
    open: /^\s*\.\<\s*/,
    next: /^\s*,\s*/,
    close: /^\s*\>\s*/,
    type: /^[^\<\>\,\.]+/,
};
templateHelper.getJSONtype = function(stringType, withRemainder) {
    // Get the main type from the string
    const type = stringType.match(typeRegex.type)[0];

    // Get the remainder of the string
    var remainder = stringType.replace(typeRegex.type, "");

    // Check if we open this type
    const open = remainder.match(typeRegex.open);
    if (open) {
        remainder = remainder.replace(typeRegex.open, "");

        // get the sub types
        const subTypes = [];
        var hasNext;
        do {
            var subType = templateHelper.getJSONtype(remainder, true);
            subTypes.push(subType.type);
            remainder = subType.remainder;

            // Check if there are more sub types left
            hasNext = remainder.match(typeRegex.next);
            remainder = remainder.replace(typeRegex.next, "");
        } while (hasNext);

        // Finish the sub types
        remainder = remainder.replace(typeRegex.close, "");
        if (!withRemainder)
            return {
                type: type,
                subTypes: subTypes,
            };
        return {
            remainder: remainder,
            type: {
                type: type,
                subTypes: subTypes,
            },
        };
    } else {
        if (!withRemainder)
            return {
                type: type,
            };
        return {
            remainder: remainder,
            type: {
                type: type,
            },
        };
    }
};

templateHelper.loadFile = function(meta, files, urls) {
    // Get the path to the file
    const sourceURL = path.join(meta.path, meta.filename);

    // Check if the the file has already loaded
    const file = Object.values(files).filter(
        file => file.sourceURL == sourceURL
    )[0];

    // check if we registered this file already
    if (file == undefined) {
        // Get the name without extension
        let name = meta.filename.split(".");
        name.pop();
        name = name.join(".");

        // Get the output URL and retrieve the source code
        const URL = templateHelper.getUniqueURL(`source-${name}`, urls);
        const source = fs.readFileSync(sourceURL, "utf8");

        // Store the data
        files[URL] = {
            sourceURL: sourceURL,
            URL: URL,
            sourceCode: source,
        };
        return URL;
    } else {
        return file.URL;
    }
};

templateHelper.getUniqueURL = function(url, urls) {
    // Find a unique ID
    let i = 0;
    while (urls[url + i]) i++;

    // Store said ID to indicate it is no longer unique
    urls[url + i] = true;

    // Only append the number ID if it isn't 0
    if (i != 0) url += i;

    // Return the path with extension
    return url + ".html";
};
templateHelper.getJSONobject = function(data) {
    // Get data from taffy
    var rawClasses = helper.find(data, {kind: "class"});
    var rawMethods = helper.find(data, {kind: "function"});
    var rawFiles = helper.find(data, {kind: "file"});
    var rawPackages = helper.find(data, {kind: "package"});
    var rawTypeDefs = helper.find(data, {kind: "typedef"});
    var rawMembers = helper.find(data, {kind: "member"});
    var rawTutorials = helper.find(data, {kind: "tutorials"});

    const urls = {};

    // Assemble my own object using this data

    // Track the source code
    const files = {};

    // The data that doesn't belong to any class
    const global = {
        URL: "global.html",
        name: "global",
        types: [],
        methods: {
            all: [],
        },
    };

    // Create classes
    const classes = {};
    rawClasses
        .filter(rawClass => {
            return !rawClass.undocumented;
        })
        .forEach(rawClass => {
            const URL = templateHelper.getUniqueURL(`${rawClass.name}`, urls);

            const Class = {
                URL: URL,
                sourceURL: templateHelper.loadFile(rawClass.meta, files, urls),
                range: rawClass.meta.range,
                name: rawClass.name,
                description: rawClass.classdesc,
                extends: rawClass.augments,
                static: !!rawClass.hideconstructor,
                params:
                    rawClass.params &&
                    rawClass.params.map(rawParam => ({
                        name: rawParam.name,
                        type: rawParam.type.names.map(
                            rawType => templateHelper.getJSONtype(rawType).type
                        ),
                        description: rawParam.description,
                        optional: !!rawParam.optional,
                        defaultValue: rawParam.defaultValue,
                    })),
                methods: {
                    static: {
                        public: [],
                        protected: [],
                        private: [],
                    },
                    instance: {
                        public: [],
                        protected: [],
                        private: [],
                    },
                    all: [],
                },
                fields: {
                    static: [],
                    instance: [],
                },
                types: [],
            };
            classes[Class.name] = Class;
        });

    // Add methods to the right location
    rawMethods
        .filter(rawMethod => {
            return !rawMethod.undocumented;
        })
        .forEach(rawMethod => {
            const Class = classes[rawMethod.memberof];
            const URL =
                "#method-" +
                (rawMethod.scope == "static" ? "static-" : "") +
                rawMethod.name;
            const method = {
                sourceURL: templateHelper.loadFile(rawMethod.meta, files, urls),
                range: rawMethod.meta.range,
                URL: URL,
                name: rawMethod.name,
                access: rawMethod.access || "public",
                description: rawMethod.description,
                parameters: rawMethod.params.map(rawParam => ({
                    name: rawParam.name,
                    type: rawParam.type.names.map(
                        rawType => templateHelper.getJSONtype(rawType).type
                    ),
                    description: rawParam.description,
                    optional: !!rawParam.optional,
                    defaultValue: rawParam.defaultValue,
                })),
                returns: {
                    type: rawMethod.returns[0].type.names.map(
                        rawType => templateHelper.getJSONtype(rawType).type
                    ),
                    description: rawMethod.returns[0].description,
                },
            };

            if (Class) {
                const methods = Class.methods[rawMethod.scope];
                const methodList = methods[rawMethod.access || "public"];
                methodList.push(method);
                Class.methods.all.push(method);
                method.URL = Class.URL + method.URL;
            } else if (!rawMethod.scope == "inner") {
                global.methods.all.push(method);
                method.URL = global.URL + method.URL;
            }
        });

    // Add type defs
    rawTypeDefs.forEach(rawTypeDef => {
        const Class = classes[rawTypeDef.memberof];
        const URL = "#type-" + rawTypeDef.name;
        const typedef = {
            name: rawTypeDef.name,
            description: rawTypeDef.description,
            type: rawTypeDef.type,
            properties: rawTypeDef.properties.map(property => ({
                name: property.name,
                description: property.description,
                type: property.type.names.map(
                    rawType => templateHelper.getJSONtype(rawType).type
                ),
            })),
        };

        if (Class) {
            Class.types.push(typedef);
            typedef.URL = Class.URL + typedef.URL;
        } else {
            global.types.push(typedef);
            typedef.URL = global.URL + typedef.URL;
        }
    });

    // Add fields
    rawMembers
        .filter(rawMember => {
            return !rawMember.undocumented;
        })
        .forEach(rawMember => {
            const Class = classes[rawMember.memberof];
            const URL = "#property-" + rawMember.name;
            const field = {
                sourceURL: templateHelper.loadFile(rawMember.meta, files, urls),
                range: rawMember.meta.range,
                name: rawMember.name,
                description: rawMember.description,
                type: rawMember.type.names.map(
                    rawType => templateHelper.getJSONtype(rawType).type
                ),
            };

            if (Class) {
                const fields = Class.fields[rawMember.scope];
                fields.push(field);
                field.URL = Class.URL + field.URL;
            }
        });

    // Sort methods by access
    const access = ["public", "protected", "private"];
    Object.values(classes).forEach(Class => {
        Class.methods.all.sort(
            (a, b) => access.indexOf(a.access) - access.indexOf(b.access)
        );
    });

    //Testing
    // console.log();

    return {classes: classes, global: global, files: files};
};
