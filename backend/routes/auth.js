const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt =  require('jsonwebtoken');

//Register route
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString(),
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
    
});


//Login route
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username:req.body.username});

        //Condition to throw error if the user account is not found in the database.
        !user && res.status(401).json("User not found");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SEC);
        const stringPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        //Condition to throw error if the password is not correct
        stringPassword !== req.body.password && res.status(401).json("Incorrect password");

        //Using JWT to give the user access token
        const accessToken = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT_SEC, {expiresIn:"3d"});

        //Saving the user info to send as response except the password
        const { password, ...others } = user._doc;

        //If there's no errros, this message will be thrown
        res.status(200).json({...others, accessToken});
    }
    catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;