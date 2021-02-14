import { isTemplateSpan } from "typescript";
import { Analyzer } from "./Analyzer.js";
import { MatchData } from "../MatchReader.js";

export class AverageGoalsAnalysis implements Analyzer {
  //   constructor(public matches: MatchData) {};

  run(matches: MatchData[]): string {
    return "hi";
  }
}
