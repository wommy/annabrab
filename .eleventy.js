module.exports = (config) => {
	config.setTemplateFormats("njk,css")
	return {
		dir: {
			input: "src/11ty"
		}
	};
};
