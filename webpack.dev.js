const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  // very fast compiling, using with live reloading, only is used when install `webpack-dev-server`
  devServer: {
    port: 3000, // use any port suitable for your configuration
    host: "0.0.0.0", // to accept connections from outside container
    useLocalIp: true,
    watchOptions: {
      aggregateTimeout: 500, // delay before reloading
      poll: 1000, // enable polling since fsevents are not supported in docker
    },
  },

  plugins: [
    // Only update what has changed on hot reload. While app is running, it can add, remove modules
    new webpack.HotModuleReplacementPlugin(),
  ],
});
