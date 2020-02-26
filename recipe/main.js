const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
router = require("./router"),
contentTypes = require("./content-types"),
utils = require("./utils");



router.get("/", (req, res) => {
  console.log("route get");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/course.html", (req, res) => {
  console.log("course");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/course.html", res);
});

http.createServer(router.handle).listen(port);
