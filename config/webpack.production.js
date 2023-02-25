const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: './js/[name].[hash].js',
    chunkFilename: './js/chunk.[name].[hash].js'
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    },
    minimizer: [
      //压缩js
      new TerserJSPlugin({}),
      //压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
