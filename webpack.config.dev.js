const path = require("path");
const webpackConfig = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");

webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
    {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
    }
];

webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
        favicon: path.join(__dirname, "public/favicon.ico")
    }),
    new DefinePlugin({
        "process.env": {
            NODE_ENV: '"development"'
        }
    })
];

webpackConfig.devServer = {
    contentBase: path.join(__dirname, "src"),
    port: 8080,
    host: "localhost",
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    },
    open: true
};

module.exports = webpackConfig;
