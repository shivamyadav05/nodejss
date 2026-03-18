const http = require('http');
 
const server = http.createServer((req, res) => {
  res.end("There is in the worst of fortune the best chances for a happy change");
});
 
server.listen(3000, () => {
  console.log("App running on port 3000");
});
