'use strict';

var LiveScript = require('livescript');

exports.name = 'LiveScript';
exports.outputFormat = 'js';

exports.render = function (str, options) {
  return LiveScript.compile(str, options);
};
