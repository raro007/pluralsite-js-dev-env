/* eslint-disable  */
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, //noise in the command line
  entry: [
    path.resolve(__dirname, 'src/index')//hot reloading
  ],
  target: 'web',//node electron
  output: { //where to create the dev bundle
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],// define plugins: hot reloading, catching errors etc
  module: { //file types we want to handle
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},//loaders: js
      {test: /\.css$/, loaders: ['style','css']}// loaders: css
    ]
  }
}
