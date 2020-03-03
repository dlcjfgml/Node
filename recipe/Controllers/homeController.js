exports.index = (req, res) => {
  res.render("index");
};

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`this is for ${veg}`);
}

exports.sendReqName = (req, res) => {
  let name = req.params.myName;
  res.render("index", { name : name });
}
