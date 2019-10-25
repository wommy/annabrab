module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_static");
	eleventyConfig.setBrowserSyncConfig({https: true});
	return {
		dir: {
			input: "views"
		}
	};
};
