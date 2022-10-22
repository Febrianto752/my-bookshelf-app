const path = require("path");
const webpackConfigJs = require("./webpack.config"); // di ambil dari file webpack.config.js
const { merge } = require("webpack-merge");

module.exports = merge(webpackConfigJs, {
  mode: "production", // choose for production | development
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "images/[name]-[hash][ext]",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3000,
    liveReload: true,
  },
});
