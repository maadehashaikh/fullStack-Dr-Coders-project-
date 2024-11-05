const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const salt = 10;
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    return res.json({
      status: 200,
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Server error", // Respond with an error message
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }
    const userFinded = await bcrypt.compare(password, user.password);
    if (userFinded) {
      const token = jwt.sign(
        { id: user._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        "tokenSecret"
      );
      //env mai rakhain gay bad mai
      return res.json({
        status: 200,
        success: true,
        message: "You are logged in succesfully",
        token,
      });
    } else {
      return res.json({
        status: 400,
        message: "Password Incorrect",
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.index = async (req, res, next) => {
  try {
    const user = await User.find(); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blogs Fetched Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const { id } = request.params;
    const user = await User.findOne({ _id: id }); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Fetched Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndDelete({ _id: id });
    // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Updated Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};
