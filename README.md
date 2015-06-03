# jstransformer-livescript

[LiveScript](http://livescript.net) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-livescript/master.svg)](https://travis-ci.org/jstransformers/jstransformer-livescript)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-livescript/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-livescript?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-livescript.svg)](https://www.npmjs.org/package/jstransformer-livescript)

## Installation

    npm install jstransformer-livescript

## API

```js
var foo = require('jstransformer')(require('jstransformer-livescript'))

foo.render("alert 'boom'").body
//=> (function(){
//     alert(\"boom\");
//   }).call(this);
```

## License

MIT
