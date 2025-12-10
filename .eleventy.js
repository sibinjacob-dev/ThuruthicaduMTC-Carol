module.exports = function(eleventyConfig) {
  // Copy CSS files directly if you add a separate css folder later
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/ThuruthicaduMTC-Carol/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};