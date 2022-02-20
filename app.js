const http = require("http");

const sever = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});

sever.listen(5000, () => {
  console.log("listen to the port 5000");
});
