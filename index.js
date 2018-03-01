/**
 * Html webpack asset template plugin
 *
 * @param {Object} options
 */
function HtmlWebpackAssetTemplatePlugin(options) {
}

HtmlWebpackAssetTemplatePlugin.prototype.apply = function(compiler) {
  compiler.hooks.compilation.tap('HtmlWebpackAssetTemplatePlugin',
    function(compilation) {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
        'HtmlIndexPlugin',
        function(htmlPluginData, callback) {
          const filename = htmlPluginData.plugin.options.filename;
          if (compilation.assets[filename]) {
            htmlPluginData.html = compilation.assets[filename].source();
            delete compilation.assets[filename];
          }

          callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlWebpackAssetTemplatePlugin;
