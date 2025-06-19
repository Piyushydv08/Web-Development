const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Request Ki kahani --- complex wayy if there are so many request then 
// app.get('/', (req,res) => {
//   // res.send("Got a GET Request")
//   res.sendFile('./dummy.html', {root:__dirname});
// });

// app.post('/items', (req, res) => {
//   // res.send("Got a POST Request")
//   res.json({x:1, y:2, z:3});
// });

// app.put('/items/:id', (req, res) => {
//   res.send("Got a PUT Request")
// });

// app.delete('/items/:id', (req, res) => {
//   res.send("Got a DELETE Request")
// });


//Simpler wayy
//import item ki router file
const item = require('./routes/item');
//load into application
app.use('/api', item);

// -> /api/ -> item home page
// -> /api/items -> item post request
// -> /api/items/:id -> put/delete request


app.listen(port, () => {
  console.log(`Piyush app listening on port ${port}`)
})