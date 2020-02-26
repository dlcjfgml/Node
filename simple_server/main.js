
const port = 3000,
http = require("http"),
router = require("./router"),
fs = require("fs"),
plainTextContentType = {
  "Content-Type": "text/plain"
},
htmlContentType = {
  "Content-Type": "text/html"
},
customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading file");
    }
    res.end();
  });
};

router.get("/", (req, res) => {
  res.writeHead(200, plainTextContentType);
  res.end("INDEX");
});

router.get("/index.html", (req, res) => {
  res.writeHead(200, htmlContentType);
  customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(200, plainTextContentType);
  res.end("POSTED");
});

const sendErrorResponse = res => {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>File Not Found haha</h1>");
  res.end();
};

http.createServer(router.handle).listen(port);
