const http = require('http');
const os = require('os');
let requestCount = 0;

http.createServer((req, res) => {
  requestCount += 1;
  console.log('Request from ' + req.connection.remoteAddress);
  if (requestCount > 5){
    res.writeHead(500);
  } else {
    res.writeHead(200);
  }
	res.end("I'm " + os.hostname() + "\n");
})
.listen(8080);