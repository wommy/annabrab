module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("admin");
	return {
		dir: {
			input: "views"
		}
	};
};
