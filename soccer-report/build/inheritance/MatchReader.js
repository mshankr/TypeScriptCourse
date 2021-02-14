"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MatchReader = void 0;
var CsvFileReader_js_1 = require("./CsvFileReader.js");
var utils_js_1 = require("./utils.js");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader(filename) {
        var _this = _super.call(this, filename) || this;
        _this.filename = filename;
        _this.mapRow = function (row) { return [
            utils_js_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; };
        return _this;
    }
    return MatchReader;
}(CsvFileReader_js_1.CsvFileReader));
exports.MatchReader = MatchReader;
