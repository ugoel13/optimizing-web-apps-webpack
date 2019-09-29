const path = require("path");
const webpack = require("webpack");

const baseConfig = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "./app/dist"),
    filename: "app.bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./app"),
    publicPath: "/dist/",
    watchContentBase: true,
    hot: true
  },
  plugins: [new webpack.NamedModulesPlugin()]
};

module.exports = function(env) {
  const isDevelopment = env === "development";
  console.log(
    `This is a ${isDevelopment ? "Development" : "Production"} build`
  );
  if (isDevelopment) {
    baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return baseConfig;
};
