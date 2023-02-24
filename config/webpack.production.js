const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    //打包前清除上次打包
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "../public/manifest.json"), to: path.resolve(__dirname, "../dist") },
      ],
    }),
  ]
}
