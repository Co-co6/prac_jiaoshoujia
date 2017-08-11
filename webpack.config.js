const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'buld.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tpl$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {loader: 'url-loader', options: {limit: 4000}},
                    'image-webpack-loader'
                ]
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        //配置需要解析的语法规范
                        presets:['es2015'],
                        plugins:['transform-runtime']
                    }
                },
                exclude:/(node_module)|bower_components/
            }
        ]

    }
}