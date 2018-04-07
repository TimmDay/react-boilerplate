// where is entry point?
// where to output file bundle file

const path = require('path'); //to get access to path.join()

console.log(path.join(__dirname,'public'));
// node webpack.config.js



module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/
        }]
    }
};