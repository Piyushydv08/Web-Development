const express = require('express')
const router = express.Router();

const User = require('../models/model');

//routes

//crud Operations

//View/Read

router.get('/users', async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

//create

router.post('/users', async(req, res) => {
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();
        res.status(200).json({
            success:true,
            user: newUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

router.put('/users/:id', async(req, res) => {
    
        const {id} = req.params;
        const {name, age, weight} =req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id, {name, age, weight});

        if(!updateUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        //but if you have updated the user successfully
        res.status(200).json({
            success:true,
            user:updateUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

router.delete('/users/:id', async(req, res) => {
    
        const {id} = req.params;

    try{
        const deleteUser = await User.findByIdAndDelete(id);

        if(!deleteUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }
        
        //but if user found and deleted successfully
        res.status(200).json({
            success:true,
            user:deleteUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})


module.exports = router;