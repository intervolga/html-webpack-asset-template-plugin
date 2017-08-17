const webpack = require('webpack');
const generateConfig = require('./generate-config');

module.exports = (entry, out) => {
  const config = generateConfig(entry, out);
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      const we = err ||
        (stats.hasErrors() && stats.compilation.errors[0]) ||
        (stats.hasWarnings() && stats.compilation.warnings[0]);

      if (we) {
        reject(we);
        return;
      }

      resolve();
    });
  });
};
