require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Streaking naked on ${SERVER_PORT}!`))  
})

app.get('/house', ctrl.getHouses)
app.post('/house', ctrl.addHouse)
app.delete(`/house/:id`, ctrl.deleteHouse)