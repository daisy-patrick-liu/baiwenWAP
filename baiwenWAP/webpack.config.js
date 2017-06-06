var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=50000&name=images/[name].[ext]'
			},
			{
				test: /\.(woff|svg|eot|ttf|otf)$/,
				loader: 'url-loader?limit=50000&name=fonts/[name].[hash:5].[ext]'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin({
			title: '百问在线',
			favicon: './src/images/logo.png',
			template: './src/index.html',
			inject: true,
			hash: true
		})
	],
	devServer: {
		contentBase: './src'
	}
}
