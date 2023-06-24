const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_ICY7MJwDhq96ffYXcCOIT4bTuF06O88Fq5lreRQwYqA" });

(async () => {
  const response = await notion.pages.create({
    parent: {
      page_id: 'f10416f48326442c963fc56d91dc0d64',
    },
    properties: {
      title: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'A note from your pals at Notion',
            },
          },
        ],
      },
    },
    children: [
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'You made this page using the Notion API. Pretty cool, huh? We hope you enjoy building with us.',
              },
            },
          ],
        },
      },
    ],
  });
  console.log(response);
})();