const http = require('http');
const os = require('os');

http.createServer((req, res) => {
	console.log('Request from ' + req.connection.remoteAddress);
	res.writeHead(200);
	res.end("I'm " + os.hostname() + "\n");
})
.listen(8080);