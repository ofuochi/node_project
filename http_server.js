var http = require('http');
var fs = require("fs");

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    var filePath = process.argv[3];
    var src = fs.createReadStream(filePath);
    src.pipe(res);
    console.log(res.toString());

});
server.listen(process.argv[2], () => {
    console.log('server bound on port: ' + process.argv[2]);
});