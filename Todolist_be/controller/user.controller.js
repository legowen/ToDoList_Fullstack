const User = require("../models/user");
const bcrypt = require("bcrypt");
//bcrypt
const saltRounds = 10;
//Encryption = 10

const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("Already signed in User");
    }

    const salt = bcrypt.genSaltSync(saltRounds); // bcrypt : password 암호화
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB.
    const newUser = new User({ email, name, password: hash });
    await newUser.save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

//email login
userController.loginWithEmail = async (req, res) => {
  try {
    const { email, password } = req.body; // email, password 정보 읽어오기
    const user = await User.findOne({ email }, "-createdAt -updatedAt -__v"); //Email, Password info 읽어오기
    // "-createdAt -updatedAt -__v" : data 제외  ( 한시적 )
    if (user) {
      // Load hash from your password DB.
      const isMath = bcrypt.compareSync(password, user.password); // true
      if (isMath) {
        const token = user.generateToken();
        return res.status(200).json({ status: "success", user, token });
      } // 맞으면 토큰 발행
      //암호화된 password와 input password 비교
    } // Email을 가지고 유저정보 가져오기
    throw new Error("The username or password you entered is incorrect");
    // 틀리면 Error msg sent
  } catch (error) {
    // res.status(400).json({ status: "fail", error });
    // 원래 코드를 밑으로 바꿈. => Error가 나왔을시 object를 통째로 가져오는 대신 메시지만 보여주게 하기위해
    res.status(400).json({ status: "fail", message: error.message });
  }
};

userController.getUser = async (req, res) => {
  try {
    const { userId } = req; //req.userId
    const user = User.findById(userId);
    if (!user) {
      throw new Error("Can not find user");
    }
    res.status(200).json({ status: "success", user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

module.exports = userController;

//*middleware*
