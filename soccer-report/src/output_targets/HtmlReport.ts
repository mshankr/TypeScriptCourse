import { OutputTarget } from "./OutputTarget";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: sans-serif;
}
</style>
</head>
<body>
        <h1>Soccer Analysis:</h1>
        <h3>${report}</h3>
    </body>
    </html>
    `;

    fs.writeFileSync("report.html", html);
  }
}
