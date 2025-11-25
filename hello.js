const http = require('http');
const server = http.createServer((req,res) => {
  console.log("hello world!")
  res.statusCode = 200;
  res.end();
})
server.listen(3000, () => {
    console.log('server running on port http://localhost:3000/')
})