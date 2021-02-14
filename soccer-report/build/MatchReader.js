"use strict";
exports.__esModule = true;
exports.MatchReader = void 0;
var utils_js_1 = require("./utils.js");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) { return [
            utils_js_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
