const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 2400;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  const extName = String(path.extname(filePath)).toLowerCase();

  //type of files i'm supporting
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { contentType: "text/html" });
        res.end("404: File not Found!");
      }
    } else {
      res.writeHead(200, {
        contentType: contentType,
      });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
