const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("mongodb connected succesfully");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { connectDb };
