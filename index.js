const createPage = require("./notion");
const getNotionContentFromMd = require("./file")
const GITHUB_NOTES_PAGE_ID = "f10416f48326442c963fc56d91dc0d64";


const notionContent = getNotionContentFromMd("bigquery.md")
// const notionContent = markdownToBlocks(`
// hello _world_ 
// *** 
// ## heading2
// * [x] todo

// - Hello 1
// - Hello 2
// - Hello 3
// `);

createPage(GITHUB_NOTES_PAGE_ID, "Hello World Page", notionContent);
