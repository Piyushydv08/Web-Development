const express = require('express')
const router = express.Router()

//middleware
const auth = function (req, res, next) {
    console.log("I am inside auth wala middleware")

    //dummy user
    req.user = {userId:1, role:"student"};

    if(req.user) {
        //if valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not a valid user
        res.json({
            success:false,
            message:"Not a Valid User",
        })
    }
}  

const isStudent = function(req, res, next) {
    console.log("I am inside student wala middleware")

    if(req.user.role === "student") {
        next();
    }
    else{
        res.json({
            success:false,
            message:"Acces Denied, this route is only for students",
        })
    }
}

const isAdmin = function(req, res, next) {
    console.log("I am inside admin wala middleware")

    if(req.user.role === "admin") {
        next();
    }
    else{
        res.json({
            success:false,
            message:"Acces Denied, this route is only for admin",
        })
    }
}


//routes
router.get('/student', auth, isStudent, (req, res) => {
    console.log('I am inside student route');
    res.send("Students specific page");
})

router.get('/admin', auth, isAdmin, (req, res) => {
    console.log('I am inside admin route');
    res.send("Admin specific page");
})

module.exports = router