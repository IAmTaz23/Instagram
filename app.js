require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const queries = require('./queries.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const dbString = process.env.DATABASE_URL
mongoose.connect(dbString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('MongoDB Connected')
})

app.post('/createPosts', queries.createPosts)

app.listen(3000)
console.log("Express is running!")
