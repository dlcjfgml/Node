const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};


exports.NRF = (req, res) => {
  let errcode = httpStatus.NOT_FOUND;
  res.status(errcode);
  res.send(`${errcode} | Page does not exists`);
};

exports.RIE = (error, req, res, next) => {
  let errcode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`error occured, ${error.stack}`);
  res.status(errcode);
  res.send(`${errcode} | Sorry, server has problem`);
};
