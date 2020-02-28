module.exports = (config) => {
  config.addPassthroughCopy("__static");
  config.setDataDeepMerge(true);
};
