const User = require("../models/User");
const bcrypt = require("bcrypt");
//bcrypt 
const saltRounds = 10
//Encryption = 10 

const userController = {};

userController.createUser = async (req, res) => {
    try{
        const {email, name, password} = req.body
        const user = await User.findOne({email});
        if(user){
            throw new Error("Already signed in User")
            }

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        // Store hash in your password DB.
        const newUser = new User({email, name, password: hash});
        await newUser.save();
        res.status(200).json({ status: "success" });

    }catch(error){
        res.status(400).json({status: "fail", error});
    }
}


module.exports = userController;