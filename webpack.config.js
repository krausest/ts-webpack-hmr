const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
    entry: "./src/main.ts",
    module: {
        rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
          {
            test: /\.ts$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: "ts-loader",
          },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "index.html",
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    devServer:{     
        hot: true,
        liveReload: false,
    },
    devtool: "inline-source-map",
};
