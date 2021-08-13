module.exports = function(config){
	config.addFilter( 'onlyYear', x => x.split('-')[0] )
	config.setTemplateFormats("njk,css,md")
	return {
		dir: {
			input: "src/11ty"
		}
	};
};
