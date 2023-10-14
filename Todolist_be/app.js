const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//setup express
const app = express()
app.use(bodyParser.json())
// parse application/json


const mongoURI = `mongodb://localhost:27017/todoDemo`

mongoose.connect(mongoURI, {useNewUrlParser:true})
//connect with mongoose, "useNewUrlParser => Make sure to accept new form of Mongodb"