const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared"
    },
    addvalue: {
      import: "./src/functions/addValue.js",
      dependOn: "shared"
    },
    createproject: {
      import: "./src/functions/createProject.js",
      dependOn: "shared"
    },
    fillinfo: {
      import: "./src/functions/fillInfo.js",
      dependOn: "shared"
    },
    updateprojectinfo: {
      import: "./src/functions/updateProjectInfo.js",
      dependOn: "shared"
    },
    welcome: {
      import: "./src/functions/welcome.js",
      dependOn: "shared"
    },
    shared: "date-fns"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    runtimeChunk: "single"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  }
};
