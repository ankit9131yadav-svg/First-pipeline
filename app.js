const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.end("DevOps CI/CD Running 🚀");
}).listen(port);
