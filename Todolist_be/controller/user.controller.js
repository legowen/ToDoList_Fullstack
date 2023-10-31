const User = require("../models/user");
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

        const salt = bcrypt.genSaltSync(saltRounds); // bcrypt : password 암호화
        const hash = bcrypt.hashSync(password, salt);
        // Store hash in your password DB.
        const newUser = new User({email, name, password: hash});
        await newUser.save();
        res.status(200).json({ status: "success" });

    }catch(error){
        res.status(400).json({status: "fail", error});
    }
};

//email login
userController.loginWithEmail = async(req,res) => {
    try{
        const{email, password} = req.body // email, password 정보 읽어오기
        const user = await User.findOne({email}); //Email, Password info 읽어오기 
        if(user){
            // Load hash from your password DB.
            const isMath = bcrypt.compareSync( password, user.password ); // true
            if (isMath){
                const token = user.generateToken();
                return res.status(200).json({ status : "success", user, token })
            } // 맞으면 토큰 발행
            //암호화된 password와 input password 비교 
        } // Email을 가지고 유저정보 가져오기
        throw new Error("The username or password you entered is incorrect");
        // 틀리면 Error msg sent
    }catch(error){
        res.status(400).json({ status: "fail", error });
    }
};


module.exports = userController;