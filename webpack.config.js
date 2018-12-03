const Path = require('path');
const Webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

let config = {
    mode: "development",
    entry: Path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': process.env.NODE_ENV == "'development'" ? "'development'" : "'production'"
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': Path.resolve(__dirname, 'src')
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        compress: true,
        hot: true,
        hotOnly: true
    };
    config.plugins.push(new Webpack.HotModuleReplacementPlugin());
}

module.exports = config;
