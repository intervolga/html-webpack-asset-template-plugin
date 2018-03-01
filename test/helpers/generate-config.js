const path = require('path');
const webpack = require('webpack');
const Plugin = require(path.join(__dirname, '..', '..', 'index.js'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const levels = [
  'node_modules/bem-core/common.blocks',
  'node_modules/bem-core/desktop.blocks',
  'node_modules/bem-components/common.blocks',
  'node_modules/bem-components/desktop.blocks',
  'node_modules/bem-components/design/common.blocks',
  'node_modules/bem-components/design/desktop.blocks',
];

const techMap = {
  styles: ['css', 'scss'],
  scripts: ['js', 'babel.js'],
  html: ['bh.js'],
};

module.exports = function(entry, output) {
  return {
    mode: 'development',

    entry: entry,

    output: {
      path: output,
      filename: 'produced.bundle.js',
      libraryTarget: 'commonjs2',
    },

    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'file-loader',
          options: {name: 'produced/[path][name].[ext]'},
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
        {
          test: /\.bemjson\.js$/,
          use: [
            '@intervolga/bemrequire-loader',
            '@intervolga/bembh-loader',
            {
              loader: '@intervolga/bemdeps-loader',
              options: {levels: levels, techMap: techMap},
            },
            {
              loader: '@intervolga/bemdecl-loader',
              options: {levels: levels},
            },
            '@intervolga/bemjson-loader',
            '@intervolga/eval-loader',
          ],
        },
      ],
    },

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'modules': 'ym',
      }),
      new HtmlWebpackPlugin({
        filename: 'source1.bemjson.html',
        xhtml: true,
      }),
      new HtmlWebpackPlugin({
        filename: 'source2.bemjson.html',
        xhtml: true,
      }),
      new Plugin({}),
      new ExtractTextPlugin('produced.bundle.css'),
    ],

    target: 'node',
  };
};
