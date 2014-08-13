# stream-dirs [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Reads all directories in path.

## Usage

```js
var readdir = require('stream-dirs');
readdir('./').on('data', console.log;
```

## API

### stream-dirs(path)

Returns Stream of objects, that have `path` and `stat` properties.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/stream-dirs
[npm-image]: https://badge.fury.io/js/stream-dirs.png

[travis-url]: http://travis-ci.org/floatdrop/stream-dirs
[travis-image]: https://travis-ci.org/floatdrop/stream-dirs.png?branch=master

[depstat-url]: https://david-dm.org/floatdrop/stream-dirs
[depstat-image]: https://david-dm.org/floatdrop/stream-dirs.png?theme=shields.io
