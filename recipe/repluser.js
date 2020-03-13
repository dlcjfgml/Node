const mongoose = require("mongoose");
dbURL = "mongodb://localhost:27017/recipe";
mongoose.connect(
  dbURL,
  {useNewUrlParser: true}
);

User= require("./Model/user");

var testUser;
User.create({ name: { first: "Lee", last: "Cheol Hee" }, email:"jiuac@naver.com", password:"wpdl"})
  .then(user =>  {
    testUser = user;
    return Subscriber.findOne({
      email: user.email;
    });
  })
  .then(subscriber => {
    testUser.subscribedAccount = subscriber;
    testUser.save().then(user => console.log("user updated"));
  })
  .catch(error => console.log(error.message));
