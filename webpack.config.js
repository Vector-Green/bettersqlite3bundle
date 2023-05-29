const path = require("path");

module.exports = {
  target: "node",
  externals: [], //!important to stay independent of node_modules folder
  entry: ["./src/main.js"],
  output: {
    clean: true,
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".cjs",
      ".mjs",
      ".js",
      ".jsx",
      ".json",
      ".wasm",
    ],
  },
  module: {
    rules: [
      {
        test: /.node$/,
        loader: "node-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: "swc-loader",
          },
        ],
      },
    ],
  },
};
