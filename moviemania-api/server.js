//Importing Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

//Setting up the Express.js Server
const app = express();
app.use(cors());
app.use(express.json());


//Connecting to the MongoDB Database
mongoose.connect("mongodb://127.0.0.1:27017/netflix").then(() => {
  console.log("DB Connected");
});


//Defining Routes
app.use("/api/user", userRoutes);


//Starting the Server
app.listen(5000, () => {
  console.log("Backend server is running");
});


//sets up an Express.js server that connects to a MongoDB database, defines routes for user-related API endpoints, and starts the server on port 5000.