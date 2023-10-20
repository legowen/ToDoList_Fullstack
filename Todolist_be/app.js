const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
//Connect Router

//setup express
const app = express();
app.use(bodyParser.json());
// parser application/json

app.use("/api", indexRouter)
//App using indexRouter, Unneccessary, but for make sure it's api


const mongoURI = `mongodb://localhost:27017/todoDemo`

mongoose
    .connect(mongoURI, {useNewUrlParser:true})
    .then(() => { 
        console.log("mongoose connected");
    })
    .catch((error) => {
        console.log("DB connection fail", error);
    });
//connect with mongoose, "useNewUrlParser => Make sure to accept new form of Mongodb"

app.listen(5010, () => {
    console.log("server on 5010");
});
