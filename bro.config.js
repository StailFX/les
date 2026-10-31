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
    "Les.main": "/les",
  },
  features: {
    "les": {},
    "Les": {},
  },
  config: {
    "les.api": "/api",
    "Les.api": "/api",
  },
};
