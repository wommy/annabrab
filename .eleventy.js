module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("admin");
	eleventyConfig.setBrowserSyncConfig({https: true});
	return {
		dir: {
			input: "views"
		}
	};
};
