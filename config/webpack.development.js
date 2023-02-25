const path = require("path");

module.exports = {
  mode: 'development',
  //sourceMap 原映射
  devtool: "inline-source-map",
  output: {
    filename: "./js/[name].[hash].js",
  },
  performance: {
    hints: false
  },
  devServer: {
    open: true, //项目启动直接打开
    hot: true, //开启热更新
    compress: true, //启用gzip压缩
    port: 8888, //端口
    static: path.join(__dirname, "../public"), //指向静态文件
    client: {
      progress: true // 浏览器打印进度
    }
  },
  plugins: [
  ],
}
