import { CsvFileReader } from "./data_readers";
import { MatchReader } from "./MatchReader.js";
import { WinsAnalysis } from "./analyzers";
import { Summary } from "./Summary.js";
import { ConsoleReport, HtmlReport } from "./output_targets";

const csvFileReader = new CsvFileReader("assets/football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
