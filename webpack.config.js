const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');

const MODE = process.env.NODE_ENV || 'development';

const config = {
	mode: MODE,

	entry: {
		client: [
			'./src/client'
		]
	},

	output: {
		path: path.join(__dirname, 'lib', 'static'),
		filename: 'assets/entry.[name].[hash].js',
		chunkFilename: 'assets/dependancy.[id].[chunkhash].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /.(png|jpe?g|gif|svg|stl)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[hash].[ext]'
						}
					}
				]
			}
		]
	},

	plugins: [
		new WebpackBundleSizeAnalyzerPlugin('./webpack-report.txt'),
		new HtmlWebpackPlugin({
			chunks: ['client'],
			filename: 'index.html',
			template: 'src/client/index.html',
			title: 'rlemon webpage'
		})
	],

	devtool: 'source-map'

};

if (MODE === 'production') {
	config.plugins.push(new CompressionPlugin({
		filename: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.js$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	}));
}

module.exports = config;
