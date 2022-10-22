const path = require("path");
const webpackConfigJs = require("./webpack.config"); // di ambil dari file webpack.config.js
const { merge } = require("webpack-merge");

module.exports = merge(webpackConfigJs, {
  mode: "development", // choose for production | development
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    liveReload: true,
  },
  devtool: false,
});
