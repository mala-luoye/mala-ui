const path = require("path")
const CleanRspackPlugin = require("clean-rspack-plugin")

module.exports = {
  mode: "production",
  devtool: false,
  context: __dirname,
  entry: {
    main: "./packages/components/index.ts"
  },
  output: {
    filename: "mala.js",
    cssFilename: "mala.css",
    path: path.resolve(__dirname, "./packages/mala-ui/lib")
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "less-loader"
          }
        ],
        type: "css"
      }
    ]
  },
  plugins: [new CleanRspackPlugin()],
  externals: {
    react: "react"
  }
}
