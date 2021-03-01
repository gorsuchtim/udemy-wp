const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "https://localhost:9000/",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "kiwi.html",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      title: "dashboard",
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
        KiwiApp: "KiwiApp@http://localhost:9002/remoteEntry.js",
      },
    }),
  ],
};
