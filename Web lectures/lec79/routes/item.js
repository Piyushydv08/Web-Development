//--Yeah file saare item specific routes ko store karegii

const express = require('express')
const app = express.Router()

app.get('/', (req,res) => {
  res.send("Got a GET Request")
//res.sendFile('../dummy.html', {root:__dirname});
});

app.post('/items', (req, res) => {
  // res.send("Got a POST Request")
  res.json({x:1, y:2, z:3});
});

app.put('/items/:id', (req, res) => {
  res.send("Got a PUT Request")
});

app.delete('/items/:id', (req, res) => {
  res.send("Got a DELETE Request")
});

module.exports = app