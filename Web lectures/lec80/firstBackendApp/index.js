//including express module
const express = require('express');
//intialising an app
const app = express();

//variable that stores the port number
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

//request -> get / put / post / delete
//path -> /, /about, /articles

//start your app on sever to the selected port
app.listen(port, () => {
    console.log("Application Start ho Chuki Hai");
})