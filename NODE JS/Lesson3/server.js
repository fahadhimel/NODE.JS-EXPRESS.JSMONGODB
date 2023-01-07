const http = require("http");

const port = 3001;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>Hello first server</h1>");
});

myServer.listen(port, hostName, () => {
  console.log(`server is raning at http://${hostName}:${port}`);
});
