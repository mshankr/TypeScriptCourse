import { MatchData } from "../MatchReader";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
