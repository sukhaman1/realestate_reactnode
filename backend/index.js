//const mysql = require("mysql"); 
const connectToMongo  = require('./db');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 27019;


//View json output(response) in postman or thunderclient
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Route example
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Route example

// Available routes

app.use("/realstate/register",require('./routes/register'));
app.use("/realstate/login",require('./routes/login'));
app.use("/realstate/property",require('./routes/property'));
app.use("/realstate/property",require('./routes/enquiry'));

// Available routes


connectToMongo();
app.listen(port, () => {
  console.log(`RealEstate CORS-enabled listening on port http://localhost:${port}`)
})
