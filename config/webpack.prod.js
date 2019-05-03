let config = require("./config")
let webpack = require("webpack")
let UglifyJSPlugin = require("uglifyjs-webpack-plugin")

config.plugins.push(new UglifyJSPlugin())
config.mode = "production"
module.exports = config
