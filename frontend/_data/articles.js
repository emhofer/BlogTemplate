const EleventyFetch = require("@11ty/eleventy-fetch");
const showdown = require("showdown");
const converter = new showdown.Converter();

module.exports = async function () {
  let url = "http://127.0.0.1:1337/api/articles";

  /* This returns a promise */
  let response = await EleventyFetch(url, {
    duration: "1h", // save for 1 week
    type: "json", // we’ll parse JSON for you
  });

  for (let i = 0; i < response.data.length; i++) {
    response.data[i].attributes.content = converter.makeHtml(
      response.data[i].attributes.content
    );
  }

  return response;
};
