const mongoose = require("mongoose");
dbURL = "mongodb://localhost:27017/recipe";
mongoose.connect(
  dbURL,
  {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;

const Subscriber = require("./Model/subscriber");
const Course = require("./Model/course");

var testCourse, testSubscriber;

Subscriber.remove({})
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Course.remove({});
  })
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Subscriber.create({
      name: "Jon",
      email: "jiuac@nav.com",
      zipCode: 12345
    });
  })
  .then(subscriber => {
    console.log(`Created Subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Subscriber.findOne({
      name: "Jon"
    });
  })
  .then(subscriber => {
    testSubscriber = subscriber;
    console.log(`Found one subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Course.create({
      title: "Tomato Land",
      description: "sweet",
      zipCode: "12345",
      items: ["cherry", "heirloom"]
    })
    .then(course => {
       testCourse = course;
       console.log(`Created One Course: ${course.title}`);
     })
  })
  .then(() => {
    testSubscriber.courses.push(testCourse);
    testSubscriber.save();
  })
  .then(() => {
    return Subscriber.populate(testSubscriber, "courses");
  })
  .then(subscriber => console.log(subscriber))
  .then(() => {
    return Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id)
    });
  })
  .then(subscriber => console.log(subscriber));
