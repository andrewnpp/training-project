const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

let config = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash].js",
        chunkFilename: "js/[name].[hash].js",
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: [path.resolve(__dirname, "public/index.html")],
                options: {
                    esModule: false
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "src/assets",
                to: "./assets"
            }
        ])
    ]
};

module.exports = config;
