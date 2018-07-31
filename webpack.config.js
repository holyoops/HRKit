// requires
const webpack = require('webpack');
const path = require('path');

// plugins
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const extractCSS = new ExtractTextPlugin({ filename: 'bundle_[hash:8].css', disable: false, allChunks: true });

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './dist');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const jsEntry = [
    'index'
];

const config = {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: sourcePath,
    mode: isProd ? 'production' : 'development',
    entry: {
        js: jsEntry,
    },
    output: {
        path: staticsPath,
        filename: '[hash:32].js',
        publicPath: '/',
        chunkFilename: '[chunkhash:32].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: sourcePath + '/index.html',
            production: isProd,
            inject: true,
        }),
        //    extractCSS,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // include: [
                    //     path.join(process.cwd(), './src')
                    // ],
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: "resource/image/"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ],
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        publicPath: '/',
        port: 10262,
        host: '0.0.0.0',
        hot: true,
        compress: isProd,
        stats: { colors: true },
    }

}


module.exports = config;
