let path = require("path");
let InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve("./src"),
	entry: ['./controllers/MainController', './main.scss'],
	output: {
		path: "./dist",
		filename: "bundle.js"  
	},
	plugins: [new InlineEnviromentVariablesPlugin({ NODE_ENV: "GIT-PAGE"}),
				new ExtractTextPlugin('styles.css')
	],
	
	module: {
         loaders: [ 
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
			{
             test: /\.js$/,
             exclude: /node_modules/,
			 include: /src/,
             loader: 'babel-loader',
			 
			 query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'es2015-ie', 'stage-0']
			}
         }]
    }
}