var fs = require("fs");

module.exports = function(dir, ext, callback) {
        ext = "." + ext;
        fs.readdir(dir.toString(), function(error, data) {
                if (error) return callback(error);
                var list = data.filter(function(item) {
                        return ext === item.substr(item.length - (ext.length));
                });

                callback(null, list);

        });

};
