'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = 'alert "boom"';
var expected = 'alert(\"boom\");';

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert(output.indexOf(expected) > 1);
}

test(transform.name, function () {
  var output = transform.render(input);
  assertEqual(output, expected);
});
