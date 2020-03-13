
var courses = [
  {
    title: "Event",
    cost: 20
  },
  {
    titele: "Async",
    cost: 25
  },
  {
    title: "Object",
    cost: 10
  }
];

module.exports = {
  getSubscriptionPage: (req, res) => {
    res.render("contact");
  },

  showCourses: (req, res) => {
    res.render("courses", {
      offeredCourses: courses
     });
  },

  index : (req, res) => {
    res.render("index");
  },

  logRequestPaths : (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
  }
};
