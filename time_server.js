var net = require('net');

function d(data) {
    return data < 10 ? "0" + data : data;
}

var server = net.createServer(socket => {
    console.log('client connected');

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();

    socket.end(year + "-" + d(month) + "-" + d(day) + " " + d(hour) + ":" + d(min) + "\n");

    socket.on("end", () => {
        console.log('client disconnected');
    });
    server.on('error', err => {
        throw err;
    });
});
server.listen(process.argv[2], () => {
    console.log('server bound on port: ' + process.argv[2]);
});