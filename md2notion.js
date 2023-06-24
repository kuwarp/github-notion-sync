const { markdownToBlocks, markdownToRichText } = require("@tryfabric/martian");
const fs = require("fs");
const mdFile = fs.readFileSync("bigquery.md");
const notion = markdownToBlocks(mdFile);
console.log(notion);
