# jstransformer-livescript

[LiveScript](http://livescript.net) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-livescript/master.svg)](https://travis-ci.org/jstransformers/jstransformer-livescript)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-livescript/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-livescript)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-livescript/master.svg)](http://david-dm.org/jstransformers/jstransformer-livescript)
[![NPM version](https://img.shields.io/npm/v/jstransformer-livescript.svg)](https://www.npmjs.org/package/jstransformer-livescript)

## Installation

    npm install jstransformer-livescript

## API

```js
var livescript = require('jstransformer')(require('jstransformer-livescript'))

livescript.render("alert 'boom'").body
//=> (function(){
//     alert(\"boom\");
//   }).call(this);
```

## License

MIT
