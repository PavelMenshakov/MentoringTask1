let path = require("path");

module.exports = {
	context: path.resolve("./src"),
	entry: "./controllers/MainController",
	output: {
		path: "./dist",
		filename: "bundle.js"  
	},
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