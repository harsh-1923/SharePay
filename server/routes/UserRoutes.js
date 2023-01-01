const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");

userRouter.post("/create", (req, res) => {
  const { username, email, password, avatar, contactNo } = req.body;

  if (!username || !email || !password || !avatar || !contactNo) {
    return res.status(400).json({
      error: true,
      message: "Missing credentials",
      isAuthenticated: false,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: "Unexpected error, Please try again latter",
        isAuthenticated: false,
      });

    if (user) {
      return res.status(400).json({
        error: true,
        message: "Authentication failed - User already exists",
        isAuthenticated: false,
      });
    } else {
      const newUser = new User({
        username,
        email,
        password,
        avatar,
        contactNo,
      });

      newUser.save((err) => {
        if (err) {
          return res.status(400).json({
            error: true,
            message: "Couldnt create user",
            isAuthenticated: false,
          });
        } else {
          return res.status(200).json({
            error: false,
            message: "Welcome to SharePay, user created",
            isAuthenticated: true,
            newUser,
          });
        }
      });
    }
  });
});

module.exports = userRouter;
