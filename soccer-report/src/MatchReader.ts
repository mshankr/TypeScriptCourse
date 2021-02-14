import { dateStringToDate } from "./utils.js";
import { MatchResult } from "./constants.js";
import { DataReader } from "./data_readers/DataReader.js";

// Define the tuple as a new type
export type MatchData = [
  Date,
  string, // Team 1
  string, // Team 2
  number, // Team 1's score
  number, // Team 2's score
  MatchResult, // HomeWins, AwayWins, Draw
  string // Referee
];

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
