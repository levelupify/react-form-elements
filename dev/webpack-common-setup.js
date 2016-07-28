var path = require('path');

module.exports = function() {
  var vars = {};
  vars.rootPath = path.resolve(__dirname, '..');
  vars.nodeModulesPath = path.resolve(vars.rootPath, 'node_modules');
  vars.buildPath = path.resolve(vars.rootPath, 'dist');
  vars.mainPath = path.resolve(vars.rootPath, 'bundle.js');
  vars.excludedPaths = [vars.nodeModulesPath];
  vars.devServerPort = 3001;
  return vars;
}();
