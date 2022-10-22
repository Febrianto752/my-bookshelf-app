const path = require("path");

module.exports = {
  mode: "development", // choose for production | development
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
  devtool: false,
};
