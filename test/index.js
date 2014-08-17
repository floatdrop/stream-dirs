/* global it */

var assert = require('stream-assert');
var readdir = require('../index.js');
var should = require('should');
var sinon = require('sinon');
var fs = require('fs');

it('should emit error from fs.readdir', function (done) {
    readdir('undefined')
        .on('error', function (err) {
            should.exist(err);
            done();
        });
});

it('should emit error from fs.stat', function (done) {
    sinon.stub(fs, 'stat', function (path, cb) {
        cb(new Error('Bang!'));
    });

    readdir(__dirname + '/fixtures')
        .on('error', function (err) {
            fs.stat.restore();
            should.exist(err);
            done();
        });
});


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
