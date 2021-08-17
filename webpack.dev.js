const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  // very fast compiling, using with live reloading, only is used when install `webpack-dev-server`
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080, // match with localhost:8080
  },

  plugins: [
    // Only update what has changed on hot reload. While app is running, it can add, remove modules
    new webpack.HotModuleReplacementPlugin(),
  ],
});
