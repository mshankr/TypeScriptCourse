"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  font-family: sans-serif;\n}\n</style>\n</head>\n<body>\n        <h1>Soccer Analysis:</h1>\n        <h3>" + report + "</h3>\n    </body>\n    </html>\n    ";
        fs_1["default"].writeFileSync("report.html", html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
