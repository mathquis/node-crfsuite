var path = require('path');
var binary = require('@mapbox/node-pre-gyp');

var binaryPath = binary.find(path.resolve(path.join(__dirname, './package.json')));
var CRFSuite = require(binaryPath);

module.exports = CRFSuite;
