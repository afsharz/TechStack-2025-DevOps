
const http = require('http');
const port = 3002;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from ndoe app 30002\n');
}).listen(port, ()=> console.log('Listening 3002'));
