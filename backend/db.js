const mongoose = require('mongoose');


//connection example
//mongoose.connect('mongodb://username:password@host:port/database?options...');

// inotebook is database which db you want to connect
const mongoURI = "mongodb://localhost:27017/realestate"
const connectToMongo = () =>{
    mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = connectToMongo;