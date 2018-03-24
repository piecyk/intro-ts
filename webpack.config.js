const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const isDevelopment = nodeEnv !== 'production';

const srcPath = path.resolve(__dirname, 'src');
const outPath = path.resolve(__dirname, 'docs');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    "app": [
      // "webpack-hot-middleware/client",
      // "react-hot-loader/patch",
      path.resolve(srcPath, 'index.tsx')
    ],
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    path: outPath,
    filename: "[name].bundle.js"
    // publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    symlinks: false,
    unsafeCache: false,
    // todo:
    alias: {
      'react-live': path.resolve(srcPath, 'lib/vendor/react-live/react-live.js'),
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(nodeEnv)
      }
    }),
    // Ignore require() calls in vs/language/typescript/lib/typescriptServices.js
    new webpack.IgnorePlugin(
      /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
      /vs\/language\/typescript\/lib/
    ),
    new CleanWebpackPlugin(outPath, {
      verbose: true,
      dry: false,
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(srcPath, 'public_static'),
      to: outPath,
      ignore: '**/.DS_Store'
    }]),
  ],
  module: {
    rules: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false",
      include: srcPath
    }, {
      test: /\.(ts|tsx)$/,
      use: [
        {loader: 'babel-loader'},
        {loader: 'ts-loader'}
      ],
      include: srcPath
    } , {
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      include: srcPath,
      exclude: path.resolve(srcPath, 'lib/vendor')
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: srcPath
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: srcPath
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: srcPath
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: srcPath
    }]
  }
};
