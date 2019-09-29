const path = require("path");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV === "development";
console.log(`This is a ${isDevelopment ? "Development" : "Production"} build`);

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

if (isDevelopment) {
  baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = baseConfig;
