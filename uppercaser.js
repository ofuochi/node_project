var http = require("http");
var map = require("through2-map");

var truncate = map(chunk => {
  return chunk.toString().toUpperCase();

});

var server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  req.pipe(truncate).pipe(res);
});
server.listen(process.argv[2]);
