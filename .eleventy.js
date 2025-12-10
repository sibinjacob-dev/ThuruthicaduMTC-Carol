module.exports = function(eleventyConfig) {
  // Copy CSS files directly if you add a separate css folder later
  eleventyConfig.addPassthroughCopy("src/css");

  // Filter to strip a leading slash so links can be used as relative paths
  eleventyConfig.addFilter("stripLeadingSlash", function(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0) === '/' ? str.slice(1) : str;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};