/** @module publish */

var template = require("jsdoc/template");
var doop = require("jsdoc/util/doop");
var env = require("jsdoc/env");
var fs = require("fs");
var path = require("path");
var helper = require("jsdoc/util/templateHelper");
var logger = require("jsdoc/util/logger");
var Handlebars = require("handlebars");
var mkdir = require("mkdirp-sync");
var templateHelper = require("./templateHelper");

var outdir;

var templates = [];
function getTemplate(file) {
    if (templates[file]) return templates[file];

    var source = fs.readFileSync(path.resolve(__dirname, "tmpl", file), "utf8");
    return (templates[file] = Handlebars.compile(source));
}
function generate(title, docs, filename, resolveLinks) {
    var docData = {
        env: env,
        title: title,
        docs: docs,
    };

    var template = getTemplate("page.hbs");
    var html = template(docData);

    var outpath = path.join(outdir, filename);
    mkdir(outdir);
    fs.writeFileSync(outpath, html, "utf8");
}

/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(taffyData, opts) {
    var data = taffyData;
    outdir = path.normalize(opts.destination);

    // // Create the homepage
    // var indexUrl = helper.getUniqueFilename("index");
    // generate(
    //     "Home",
    //     rawPackages
    //         .concat([
    //             {
    //                 kind: "mainpage",
    //                 readme: opts.readme,
    //                 longname: opts.mainpagetitle
    //                     ? opts.mainpagetitle
    //                     : "Main Page",
    //             },
    //         ])
    //         .concat(rawFiles),
    //     indexUrl
    // );

    // store the data format for development
    // console.log(
    //     helper.find(data, {kind: "typedef"}).filter(ext => !ext.undocumented)
    // );
    fs.writeFileSync(
        path.join(outdir, "data.json"),
        JSON.stringify(templateHelper.getJSONobject(data), null, 4),
        "utf8"
    );
};
