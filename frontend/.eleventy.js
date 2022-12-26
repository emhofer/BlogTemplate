module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `css/` to `_site/css/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css/");

  // Copy `assets/` to `_site/assets/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("assets/");
};
