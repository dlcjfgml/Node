const mongoose = require("mongoose");
const express = require("express");
dbURL = "mongodb://localhost:27017/recipe";

mongoose.Promise = global.Promise;
mongoose.connect(dbURL, {useNewUrlParser: true});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected");
});

const subscriberController = require("./Controllers/subscriberController");
const homeController = require("./Controllers/homeController")
app = express();

app.set("view engine", "ejs");
app.set("port",  process.env.PORT || 3000);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.get("/", homeController.index);
app.get("/subscribe", subscriberController.getSubscriptionPage);
app.get("/subscribers", subscriberController.getAllSubscribers, (req, res, next) => {
  res.render("subscriber", { subscriber: req.data })
});
app.post("/subscribe", subscriberController.saveSubscriber);


app.listen(app.get("port"), () => {
  console.log(`listening on http://localhost:${app.get("port")}`);
});
