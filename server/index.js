const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //allows us access to request body

//ROUTES//

//create an applicaiton

//get all applications

//get an application

//update an application

//delete an application

app.listen(5000, () => {
  console.log("server has started on port 5000");
});