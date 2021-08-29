const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  watch: true,

  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      files: ["./*.html"],
      server: { baseDir: ["./"] },
    }),
  ],
};
