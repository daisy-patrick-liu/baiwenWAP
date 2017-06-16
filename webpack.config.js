var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

var webpackConfig = {
	entry: {},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[name].js',
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
				loader: 'url-loader?limit=50000&name=images/[name][hash:5].[ext]'
			},
			{
				test: /\.(woff|svg|eot|ttf|otf)$/,
				loader: 'url-loader?limit=50000&name=fonts/[name].[hash:5].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/[name].css")
	]
};

// 获取指定路径下的入口文件
function getEntries(globPath) {
	var files = glob.sync(globPath),
	entries = {};

	files.forEach(function(filepath) {
		// 取倒数第二层（view下面的文件夹）做包名
		var split = filepath.split('/');
		var name = split[split.length - 2];

		entries[name] = './' + filepath;
	});

	return entries;
}

var entries = getEntries('src/views/**/index.js');

Object.keys(entries).forEach(function(name) {
	// 每个页面生成一个entry
	webpackConfig.entry[name] = entries[name];

	// 每个页面生成一个html
	var plugin = new HtmlWebpackPlugin({
		favicon: 'src/images/logo.png',
		// 生成出来的html文件名
		filename: name + '.html',
		// 模板
		template: 'src/views/'+name+'/'+name+'.html',
		// 自动将引用插入html
		inject: true,
		// 每个html引用的js模块，也可以在这里加上vendor等公用模块
		chunks: [name]
	});
	webpackConfig.plugins.push(plugin);
});
module.exports = webpackConfig;
