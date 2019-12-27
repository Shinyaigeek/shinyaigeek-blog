const fs = require("fs");
const matter = require("front-matter");
const marked = require("marked");

const getItemNum = () => {
  return fs.readdirSync("./src/items").length;
};

const parseItemRawStringToMatter = tar => {
  const parsed = matter(tar);
  return {
    attributes: parsed.attributes,
    body: marked(
      parsed.body.replace(/\?\?.+\?\?/g, target => {
        return target
          .replace("??", "<span class='text__red'>")
          .replace("??", "</span>");
      }),
      {
        highlight: function(code) {
          return require("highlight.js").highlightAuto(code).value;
        }
      }
    ).replace(/\n/g, "<br>")
  };
};

const getItemRawString = tar => {
  return parseItemRawStringToMatter(
    fs.readFileSync(`./src/items/${tar}.md`, "utf8")
  );
};

module.exports = {
  getItemNum,
  getItemRawString
};
