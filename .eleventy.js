module.exports = function(eleventyConfig) {
	// Copy the `static/` directory 
	eleventyConfig.addPassthroughCopy("_static");
	
	return {
		passthroughFileCopy: true,
		dir: {
			input: "views"
		}
	};
};