var http = require("http");
const url = require('url');

var server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end("Request method must be GET\n");
    return;
  }
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  var urlObj = url.parse(req.url, true);
  if (!urlObj.query.hasOwnProperty("iso")) res.end("Please check you query string");
    var date = new Date(urlObj.query.iso);




  if (urlObj.pathname == '/api/unixtime') {

    var node2 = {
      "unixtime": Number(date.getTime())
    };
    res.end(JSON.stringify(node2));

  }
  else {
    var node1 = {

      "hour": Number(date.getHours()),
      "minute": Number(date.getMinutes()),
      "second": Number(date.getSeconds())

    };
    res.end(JSON.stringify(node1));

  }


});
server.listen(Number(process.argv[2]));
