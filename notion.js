const { Client } = require("@notionhq/client");
const { NOTION_API_TOKEN } = require("./config");
const notion = new Client({
  auth: NOTION_API_TOKEN,
});
const createPage = async (parentPageId, title, notionContent) => {
  const createPage = await notion.pages.create({
    parent: { page_id: parentPageId },
    properties: {
      title: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
      },
    },
    children: notionContent,
  });
  console.log(createPage);
};
module.exports = createPage;
