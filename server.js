const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/boundaries")) {
    const id = req.url.split("/boundaries/")[1];

    // get geojson
    fs.readFile(
      path.resolve(__dirname, "data", `${id}_geojson.json`),
      (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      }
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
