const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.updatedAt;
  delete obj.__v;
  return obj;
}; // 한시적으로가 아닌 쭉 password 보안을 위해 데이터가 안보이게 하기위함
// obj = object (_doc(_id, name, email, password))

userSchema.methods.generateToken = function () {
  var token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, { expiresIn: "1d" }); //expiredIn : create Token's expired day
  return token;
}; // Generate Token

const User = mongoose.model("User", userSchema);

module.exports = User;
