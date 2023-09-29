const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/crud'; 

async function getConnect() {
  try {
      await mongoose.set("strictQuery", true);
      await mongoose.connect(uri)
      console.log("Database is Connected")
  } catch (error) {
      console.log(error)
  }
}

module.exports = {getConnect};
