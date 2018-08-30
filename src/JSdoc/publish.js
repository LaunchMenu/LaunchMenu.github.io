/** @module publish */
const copyDir = require("copy-dir");

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
function generate(data, navData) {
    var template = getTemplate("page.hbs");
    var html = template({
        data: data,
        navData: navData,
    });

    var outpath = path.join(outdir, data.URL);
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
    var data = templateHelper.getJSONobject(taffyData);
    outdir = path.normalize(opts.destination);

    // Register partials
    fs.readdirSync(path.resolve(__dirname, "tmpl")).forEach(file => {
        Handlebars.registerPartial(
            path.basename(file, path.extname(file)),
            getTemplate(file)
        );
    });

    // Copy static files
    copyDir(path.resolve(__dirname, "static"), path.resolve(outdir, "static"));

    // Generate the files
    const navData = Object.assign({}, data.classes);
    if (data.global.types.length || data.global.methods.all.length)
        navData.global = data.global;
    generate(data.classes.Module, navData);

    fs.writeFileSync(
        path.join(outdir, "data.json"),
        JSON.stringify(data, null, 4),
        "utf8"
    );
};
