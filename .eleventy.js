module.exports = (config) => {
	config.setTemplateFormats("njk,css,md")
	return {
		dir: {
			input: "src/11ty"
		}
	};
};
