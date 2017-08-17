# html-webpack-asset-template-plugin [![Build Status](https://travis-ci.org/intervolga/html-webpack-asset-template-plugin.svg?branch=master)](https://travis-ci.org/intervolga/html-webpack-asset-template-plugin)

Replace [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) template with new one from emitted assets.
Replacement accuires only if asset name equals filename in HtmlWebpackPlugin instance.

## Installation:

Using npm:
```shell
$ npm install --save-dev @intervolga/html-webpack-asset-template-plugin
```

## Configuration:

``` javascript
const HtmlWebpackAssetTemplatePlugin = require('@intervolga/html-webpack-asset-template-plugin');
module.exports = {
	plugins: [
    new HtmlWebpackPlugin({
        filename: 'some-emitted-file.html',
    }),
    new HtmlWebpackAssetTemplatePlugin()
	]
}
```
