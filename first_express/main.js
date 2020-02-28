const express = require("express"),
homecontroller = require("./controllers/homecontroller"),
errorcontroller = require("./controllers/errorcontroller"),
layouts = require("express-ejs-layouts"),
app = express();

app.set("view engine", "ejs");
app.set("port",  process.env.PORT || 3000);
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homecontroller.logRequestPaths);
app.use(express.static("public"));

app.get("/name", homecontroller.sendReqName);
app.get("/items/:vegetable", homecontroller.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("Post Success");
});


app.use(errorcontroller.logErrors);
app.use(errorcontroller.NRF);
app.use(errorcontroller.RIE);

app.listen(app.get("port"), () => {
  console.log(`listening on http://localhost:${app.get("port")}`);
});
