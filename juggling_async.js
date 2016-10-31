var http = require("http");
var buf = "";
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var url = urls.shift();

http.get(url, function cb(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
        buf += data;
    });
    response.on('end', function() {
        console.log(buf);
        buf = "";
        if (urls.length === 0) return;
        url = urls.shift();
        http.get(url, cb);
    });
});
