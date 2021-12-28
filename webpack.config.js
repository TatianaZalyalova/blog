const { template } = require("@babel/core");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const glob = require("glob");

const pages = glob.sync("pages/*.html");

module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  plugins: [
    ...pages.map(
      (el) =>
        new HtmlWebpackPlugin({
          filename: el.replace(/^pages\//, ""),
          template: el,
        })
    ),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[contenthash][ext]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
