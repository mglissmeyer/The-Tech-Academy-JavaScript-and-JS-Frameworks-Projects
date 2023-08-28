const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const cors = require("cors");

const app = express()
app.use(express.json());
const PORT = process.env.PORT || 5000

app.use(cors());

mongoose 
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`Connected To MongoDB...`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
