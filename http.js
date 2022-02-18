const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("this is home page");
  }
  if (req.url === "/about") {
    return res.end("this is about page");
  }
  return res.end("cannot find the page");
});

server.listen(5000);
