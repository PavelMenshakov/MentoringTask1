let path = require("path");
let InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

module.exports = {
	context: path.resolve("./src"),
	entry: "./controllers/MainController",
	output: {
		path: "./dist",
		filename: "bundle.js"  
	},
	plugins: [new InlineEnviromentVariablesPlugin({ NODE_ENV: "GIT-PAGE"})],
	
	module: {
         loaders: [{
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