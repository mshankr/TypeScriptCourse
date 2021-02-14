import { Analyzer } from "./analyzers/Analyzer.js";
import { OutputTarget } from "./output_targets/OutputTarget.js";
import { MatchData } from "./MatchReader.js";

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
