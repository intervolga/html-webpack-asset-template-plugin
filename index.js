/**
 * Html webpack asset template plugin
 *
 * @param {Object} options
 */
function HtmlWebpackAssetTemplatePlugin(options) {
}

HtmlWebpackAssetTemplatePlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing',
      (htmlPluginData, callback) => {
        const filename = htmlPluginData.plugin.options.filename;
        if (compilation.assets[filename]) {
          htmlPluginData.html = compilation.assets[filename].source();
        }

        callback(null, htmlPluginData);
      });
  });
};

module.exports = HtmlWebpackAssetTemplatePlugin;
