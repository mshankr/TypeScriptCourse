import { Analyzer } from "./Analyzer.js";
import { MatchData } from "../MatchReader.js";
import { MatchResult } from "../constants.js";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWins) {
        wins++;
      }
      if (match[2] === this.team && match[5] === MatchResult.AwayWins) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
