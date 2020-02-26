const httpStatus = require("http-status-codes"),
contentTypes = require("./content-types"),
utils = require("./utils");

const routes = {
  "GET": {},
  "POST": {}
};

exports.handle = (req, res) => {
  try {
    console.log("second");
    routes[req.method][req.url](req, res);
  } catch(e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

exports.get = (url, action) => {
  console.log("first");
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
