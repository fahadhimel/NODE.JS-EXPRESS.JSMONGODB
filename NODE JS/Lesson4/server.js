const http = require("http");

const port = 3001;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h1>Hello first server</h1>");
  res.write("<h1>Hello first server</h1>");
  res.write("<h1>Hello first server</h1>");
  res.end();
});

myServer.listen(port, hostName, () => {
  console.log(`server is raning at http://${hostName}:${port}`);
});
