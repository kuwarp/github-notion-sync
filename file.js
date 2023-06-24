const { markdownToBlocks } = require("@tryfabric/martian");
const fs = require("fs");
const options = {
  notionLimits: {
    truncate: false,
  },
};
const getNotionContentFromMd = (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  return markdownToBlocks(fileContent,options);
};

module.exports = getNotionContentFromMd;
