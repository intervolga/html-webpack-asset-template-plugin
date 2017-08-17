const expect = require('expect.js');
const fs = require('fs');
const path = require('path');
const runWebpack = require('./helpers/run-webpack');

describe('html webpack asset template plugin', () => {
  it('should produced expected html', function() {
    this.timeout(30000); // eslint-disable-line no-invalid-this

    const entry1 = path.join(__dirname, 'cases', 'normal',
      'source1.bemjson.js');
    const entry2 = path.join(__dirname, 'cases', 'normal',
      'source2.bemjson.js');
    const out = path.join(__dirname, 'cases', 'normal');

    return runWebpack([entry1, entry2], out).then(function() {
      const produced = path.join(out, 'source1.bemjson.html');
      const expected = path.join(out, 'expected.bemjson.html');

      expect(fs.readFileSync(produced).toString())
        .to.eql(fs.readFileSync(expected).toString());
    });
  });
});
