/**
 * For opening CSV files
 */

import { DataReader } from "./DataReader.js";
import fs from "fs";

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
