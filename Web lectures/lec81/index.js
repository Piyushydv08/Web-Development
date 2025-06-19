const express = require('express')
const app = express()
const port = 3000

//loading middleware inbto the app
//inbuilt middleware
app.use(express.json());

//middleware --logging, auth, validation(we have to maintain order jis prakar se application mai load hoga wo order maintain hoga and route handler se pehle sab likhna hai)

//creation of middleware
const loggingMiddleware = function (req, res, next) {
    console.log('Loggin krr rha huu');
    next();
}


const authMiddleware = function (req, res, next) {
    console.log('Auth krr rha huu');

    //Ending the request-response cycle here
    // res.send('Chalo seedha ghar')

    next();
}


const validationMiddleware = function (req, res, next) {
    console.log('validation krr rha huu');
    next();
}

//loading middleware into application
// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);

const route = require('./routes/route')
//mounting the routes
app.use('/api', route)

// -> /api/student
// -> /api/admin

app.get('/', (req, res) => {
    console.log('Mai route handler hu')
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
