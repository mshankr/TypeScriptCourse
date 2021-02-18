"use strict";
exports.__esModule = true;
var data_readers_1 = require("./data_readers");
var MatchReader_js_1 = require("./MatchReader.js");
var analyzers_1 = require("./analyzers");
var Summary_js_1 = require("./Summary.js");
var output_targets_1 = require("./output_targets");
var csvFileReader = new data_readers_1.CsvFileReader("assets/football.csv");
var matchReader = new MatchReader_js_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_js_1.Summary(new analyzers_1.WinsAnalysis("Man United"), new output_targets_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);