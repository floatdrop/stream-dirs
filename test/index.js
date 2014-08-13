/* global it */

var assert = require('stream-assert');
var readdir = require('../index.js');

it('should work on empty dir', function (done) {
    readdir(__dirname + '/fixtures/empty').pipe(assert.length(0)).on('end', done);
});

it('should work on single dir', function (done) {
    readdir(__dirname + '/fixtures/single').pipe(assert.length(1)).on('end', done);
});

it('should work on couple dir', function (done) {
    readdir(__dirname + '/fixtures/couple').pipe(assert.length(2)).on('end', done);
});

it('should not read nested dirs', function (done) {
    readdir(__dirname + '/fixtures/nested').pipe(assert.length(2)).on('end', done);
});
