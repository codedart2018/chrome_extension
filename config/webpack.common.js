const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    //入口文件
    app: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    //出口文件
    // publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        // es5转换es5
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        // Images
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        //解析字体文件
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        // CSS, PostCSS, and Sass
        test: /\.(scss|css)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
    ],
  },
  plugins: [
    //插件
    new HtmlWebpackPlugin({
      title: "互予小基", //对应html文件 title
      template: path.resolve(__dirname, "../public/index.html"), //html配置路径
      filename: "index.html",
    }),
    //命令行友好提示-
    new friendlyErrorsWebpackPlugin(),
    // [
    //   "transform-runtime",
    //   {
    //     helpers: false, //表示是否开启内联的babel helpers
    //     polyfill: false, //表示是否把内置的东西(Promise, Set, Map)等转换成非全局污染的
    //     regenerator: true, //是否开启generator函数转换成使用regenerator runtime来避免污染全局域
    //     moduleName: "babel-runtime", //调用辅助 设置模块（module）名字/路径
    //   },
    // ],
    new MiniCssExtractPlugin({
      filename: './style/[name].[hash].css',
      chunkFilename: './style/chunk.[name].[hash].css'
    })
  ],
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": require("path").resolve(__dirname, "../src"),
      "@style": require("path").resolve(__dirname, "../style"),
    },
  }
};
