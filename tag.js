var compiler = require('riot-compiler');

exports.translate = function (load) {
  var precompiled = compiler.compile(load.source);
  var output = 'var riot = require("riot"); exports = ' + precompiled + ';';
  load.source = output;
  return output;
};
