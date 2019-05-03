let config = require("./config")
let webpack = require("webpack")

config.watch = true
config.mode = "development"
// config.output.publicPath = "http://localhost:8080/assets"
module.exports = config
