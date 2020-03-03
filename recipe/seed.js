const mongoose = require("mongoose"),
  Subscriber = require("./Model/subscriber");

  mongoose.connect(
    "mongodb://localhost:27017/recipe",
    { useNewUrlParser: true}
  );

  mongoose.connection;

var contacts = [
  {
    name: "Jon",
    email: "jiuac@naver.com",
    zipCode: 12345
  },
  {
    name: "Lee",
    email: "abc@naver.com",
    zipCode: 45667
  }
  {
    name: "kali",
    email: "jiuac@gmail.com",
    zipCode: 12343
  },
  {
    name: "ubuntu",
    email: "ase@naver.com",
    zipCode: 12233
  }
];


Subscriber.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber empty");
  });

var command = [];

contact.forEach((c) => {
  command.push(Subscriber.create({
    name: c.name,
    email: c.email
  }));
});

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(error);
  });
  
