const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  // very fast compiling, using with live reloading, only is used when install `webpack-dev-server`
  devServer: {
    port: process.env.PORT || 3003, // use any port suitable for your configuration
    host: "0.0.0.0", // to accept connections from outside container
    useLocalIp: true,
    watchOptions: {
      aggregateTimeout: 500, // delay before reloading
      poll: 1000, // enable polling since fsevents are not supported in docker
    },
  },

  // Separate no_modules and main app to the different bundle
  // old has only main.bundle.js but now has one more `vendor.bundle.js` for node_modules
  // Using for production, but have here to test in develop
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  plugins: [
    // Only update what has changed on hot reload. While app is running, it can add, remove modules
    new webpack.HotModuleReplacementPlugin(),
    // Using for define environment
    new webpack.DefinePlugin({
      "process.env": {
        NEW_TEST_ENV: JSON.stringify(
          "my testing value for Define Plugin",
        ),
      },
    }),
  ],
});
