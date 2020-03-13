const mongoose = require("mongoose"),
  { Schema } = mongoose,
  subscriberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  zipCode: {
    type: Number,
    min: [10000, "Zipcode too short"],
    max: 99999
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
},
{
  timestamps: true
});

subscriberSchema.methods.getInfo = function() {
  return `Name: ${this.name} Email: ${this.email} Zip code ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
  return this.model("Subscriber")
    .find({zipCode: this.zipCode})
    .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);
