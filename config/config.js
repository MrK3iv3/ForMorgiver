let fs = require("fs")
let path = require("path")
let w = require("webpack")
let wds = require("webpack-dev-server")
let HtmlWebpackPlugin = require("html-webpack-plugin")

function toPath(link){
  return path.resolve(...link.replace("./", __dirname + "/").split("/"))
}

module.exports = {
  watch: false,
  entry: toPath("./../src/app.js"),
  output: {
    path: toPath("./../public/assets"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_module|bower_components)/,
        use: ["eslint-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_module|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.json$/,
        exclude: /(node_module|bower_components)/,
        use: ["json-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        exclude: /(node_module|bower_components)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[hash:8].[ext]"
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": toPath("./../src")
    }
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    overlay: true,
    hot: true, 
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin({template: toPath("./../public/index.html"), minify: true})]
}
