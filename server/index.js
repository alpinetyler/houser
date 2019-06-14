require("dotenv").config();
const express = require('express');
const massive = require('massive')

const Ctrl = require("./controller")

const app = express();

let {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('the db is most definitely connected')
}).catch(err => console.log(err));


app.get('/api/gethouses', Ctrl.read)
app.post('/api/house', Ctrl.create)
app.delete('/api/house/:id', Ctrl.delete);







app.listen(SERVER_PORT, () => {console.log('We listen on port', SERVER_PORT)})

