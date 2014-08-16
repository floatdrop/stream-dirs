var fs = require('fs');
var join = require('path').join;
var through = require('through2');

function notHidden(file) {
    return file[0] !== '.';
}

module.exports = function (path) {
    var output = through.obj();
    fs.readdir(path, function (err, files) {
        if (err) { return output.emit('error', err); }
        files = files.filter(notHidden);

        var i = files.length;
        files.forEach(function (file) {
            var filePath = join(path, file);
            fs.stat(filePath, function (err, stat) {
                i --;
                if (err) {
                    output.emit('error', err);
                } else if (stat.isDirectory()) {
                    output.write({
                        path: filePath,
                        stat: stat
                    });
                }
                if (i === 0) {
                    output.end();
                }
            });
        });
    });
    return output;
};
