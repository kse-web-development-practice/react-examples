const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"],
                }
            }
        }
        ],
    },
    plugins: [
        new ESLintPlugin({
            exclude: ["node_modules", "dist"],
            context: path.resolve(__dirname, 'src'),
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        allowedHosts: 'all',
        compress: false,
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
};