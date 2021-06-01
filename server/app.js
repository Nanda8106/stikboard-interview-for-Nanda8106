const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// My routes
const authRoutes = require("./routes/auth");


//Database Connection
mongoose.connect("mongodb+srv://Nanda8106:Nanda1234spacex@spacex.amqlv.mongodb.net/spacex?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
}).then( () => {
    console.log("DATABASE CONNECTED")
})

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My routes
app.use("/api", authRoutes);



// my port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is running at port ${port}`)
})