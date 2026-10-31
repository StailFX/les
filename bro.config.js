const pkg = require("./package.json");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    "les.main": "/les",
  },
  features: {
    "les": {},
  },
  config: {
    "les.api": "/api",
  },
};
