require("dotenv").config();
const express = require('express');
const massive = require('massive')

const Ctrl = require("./controller")

let {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('the db is most definitely connected')
})

const app = express();

app.use(express.json())


app.listen(SERVER_PORT, () => {
    console.log('We listen on port', SERVER_PORT)
})

