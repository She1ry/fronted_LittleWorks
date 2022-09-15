
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require('./paths');
module.exports = {
    entry: {
        app: paths.appSrc,
    },
    output: {
      path: paths.appDist,
      filename: '[name].bundle.js',
      clean: true,
    },
    module: {
        rules: [
            //babel-loader来编译处理 js和jsx文件
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-react"]
                  }
                }
              },

            //style-loader 和 css-loader来处理 css 依赖和注入内联样式
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: paths.appHtml, //指定模板页面
          filename: "index.html", //打包生成页面的名称，默认index.html
          title: "She1ry",
        }),
      ],
    
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        static: path.join(__dirname, "../dist"),
        //端口
        port: 8001
    },
    devtool: 'inline-source-map',
};