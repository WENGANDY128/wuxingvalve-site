module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: ".",
      includes: "src",
      data: "src/_data",
      output: "_site"
    }
  };
};
