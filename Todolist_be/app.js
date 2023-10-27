const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
//Connect Router

require("dotenv").config();//
//dotenv

//setup express
const app = express();


//
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;//
//

app.use(bodyParser.json());
// parser application/json

app.use(cors());
// use cors

app.use("/api", indexRouter)
//App using indexRouter, Unneccessary, but for make sure it's api

// const mongoURI = `mongodb://localhost:27017/todoDemo`
const mongoURI = MONGODB_URI_PROD;//
//

mongoose
    .connect(mongoURI, {useNewUrlParser: true })
    .then(() =>  console.log("mongoose connected"))
    .catch((error) =>  console.log("DB connection fail", error));
//connect with mongoose, "useNewUrlParser => Make sure to accept new form of Mongodb"

app.listen(process.env.PORT || 5010, () => {
    console.log("server on 5010");
});
