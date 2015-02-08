'use strict';

var fs = require('fs');
var assert = require('assert');
var transform = require('../');

var input = fs.readFileSync(__dirname + '/input.ls', 'utf8');

var output = transform.render(input);

fs.writeFileSync(__dirname + '/output.js', output);

var called = false;
Function('alert', output)(function (txt) {
  called = true;
  assert(txt === 'boom');
});
assert(called);
console.log('tests passed');
