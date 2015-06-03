'use strict';

var LiveScript = require('livescript');

exports.name = 'LiveScript';
exports.inputFormats = ['ls', 'livescript'];
exports.outputFormat = 'js';

exports.render = LiveScript.compile;
