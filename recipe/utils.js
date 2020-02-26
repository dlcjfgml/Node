const fs = require("fs"),
httpStatus = require("http-status-codes"),
contentTypes = require("./content-types");

module.exports = {
  getFile: (file, res) => {
    console.log("get file");
    fs.readFile(`./${file}`, (error, data) => {
      if(error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  }
};
