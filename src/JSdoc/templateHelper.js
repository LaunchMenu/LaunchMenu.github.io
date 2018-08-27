var helper = require("jsdoc/util/templateHelper");

const typeRegex = {
    open: /^\s*\.\<\s*/,
    next: /^\s*,\s*/,
    close: /^\s*\>\s*/,
    type: /^[^\<\>\,\.]+/,
};
const getJSONtype = (module.exports.getJSONtype = function(
    stringType,
    withRemainder
) {
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
            var subType = getJSONtype(remainder, true);
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
});

module.exports.getJSONobject = function(data) {
    // Get data from taffy
    var rawClasses = helper.find(data, {kind: "class"});
    var rawMethods = helper.find(data, {kind: "function"});
    var rawFiles = helper.find(data, {kind: "file"});
    var rawPackages = helper.find(data, {kind: "package"});
    var rawTypeDefs = helper.find(data, {kind: "typedef"});
    var rawMembers = helper.find(data, {kind: "member"});
    var rawTutorials = helper.find(data, {kind: "tutorials"});

    // Assemble my own object using this data
    const global = {
        // The data that doesn't belong to any class
        functions: [],
    };

    // Create classes
    const classes = {};
    rawClasses
        .filter(rawClass => {
            return !rawClass.undocumented;
        })
        .forEach(rawClass => {
            const Class = {
                file: {
                    filename: rawClass.meta.filename,
                    directory: rawClass.meta.path,
                },
                range: rawClass.meta.range,
                name: rawClass.name,
                description: rawClass.classdesc,
                extends: rawClass.augments,
                static: !!rawClass.hideconstructor,
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
            const method = {
                range: rawMethod.meta.range,
                name: rawMethod.name,
                description: rawMethod.description,
                parameters: rawMethod.params.map(rawParam => ({
                    name: rawParam.name,
                    type: rawParam.type.names.map(
                        rawType => getJSONtype(rawType).type
                    ),
                    description: rawParam.description,
                    optional: !!rawParam.optional,
                    defaultValue: rawParam.defaultValue,
                })),
                returns: {
                    type: rawMethod.returns[0].type.names.map(
                        rawType => getJSONtype(rawType).type
                    ),
                    description: rawMethod.returns[0].description,
                },
            };

            if (Class) {
                const methods = Class.methods[rawMethod.scope];
                const methodList = methods[rawMethod.access || "public"];
                methodList.push(method);
            } else if (!rawMethod.scope == "inner") {
                global.functions.push(method);
            }
        });

    // Add type defs
    rawTypeDefs.forEach(rawTypeDef => {
        const Class = classes[rawTypeDef.memberof];
        const typedef = {
            name: rawTypeDef.name,
            description: rawTypeDef.description,
            type: rawTypeDef.type,
            properties: rawTypeDef.properties.map(property => ({
                name: property.name,
                description: property.description,
                type: property.type.names.map(
                    rawType => getJSONtype(rawType).type
                ),
            })),
        };

        if (Class) {
            Class.types.push(typedef);
        }
    });

    // Add fields
    rawMembers
        .filter(rawMember => {
            return !rawMember.undocumented;
        })
        .forEach(rawMember => {
            const Class = classes[rawMember.memberof];
            const field = {
                range: rawMember.meta.range,
                name: rawMember.name,
                description: rawMember.description,
                type: rawMember.type.names.map(
                    rawType => getJSONtype(rawType).type
                ),
            };

            if (Class) {
                const fields = Class.fields[rawMember.scope];
                fields.push(field);
            }
        });

    return {classes: classes, global: global};
};
