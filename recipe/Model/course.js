const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  courseSchema = new  Schema({
  title:{
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  maxStudents: {
    type: Number,
    default: 0,
    min: [0, "Course cannot have student below 0"]
  },
  cost: {
    type: Number,
    default: 0,
    min: [0, "Course cannot have negative cost"]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Course", courseSchema);
