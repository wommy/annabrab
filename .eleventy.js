module.exports = (config) => {
  config.addPassthroughCopy("./src/11ty/__static");
  config.setDataDeepMerge(true);
  config.setTemplateFormats("njk,css");
  return {
  	dir: {
  		input: "src/11ty"
  	}
  };
};
