const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");

const mongoose = require("mongoose");
dbURL = "mongodb://localhost:27017/recipe";
mongoose.connect(
  dbURL,
  {useNewUrlParser: true}
);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected");
});

const subscriberController = require("./Controllers/subscriberController");
const homeController = require("./Controllers/homeController");
const userController = require("./Controllers/userController");
app = express();

app.set("view engine", "ejs");
app.set("port",  process.env.PORT || 3000);


router.use(express.json());
router.use(
  express.urlencoded({
    extended: false
  })
);
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

app.get("/", homeController.index);
app.get("/contact", subscriberController.getSubscriptionPage);
app.post("/subscribe", subscriberController.saveSubscriber);

router.get("/users", userController.index, userController.indexView);
router.get("/users/new", userController.new);
router.post("/users/create", userController.create, userController.redirectView);
router.get("/users/:id", userController.show, userController.showView);
router.get("/users/:id/edit", userController.edit);
router.put("/users/:id/update", userController.update, userController.redirectView);
router.delete("/users/:id/delete", userController.delete, userController.redirectView);

router.get("/subscribers", subscriberController.index, subscriberController.indexView  );
router.get("/subscribers/new", subscriberController.new, subscriberController.indexView  );
router.post("/subscribers/create", subscriberController.create, subscriberController.redirectView);
router.get("/subscribers/:id", subscriberController.show, subscriberController.showView);
router.get("/subscribers/:id/edit", subscriberController.edit);
router.put("/subscribers/:id/update", subscriberController.update, subscriberController.redirectView);
router.delete("/subscribers/:id/delete", subscriberController.delete, subscriberController.redirectView);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`listening on http://localhost:${app.get("port")}`);
});
