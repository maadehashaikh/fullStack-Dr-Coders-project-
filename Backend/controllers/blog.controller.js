const Blog = require("../model/blog.model");

exports.store = async (req, res, next) => {
  try { 
    const blog = await Blog.create(req.body);
    return res.json({
      status: 200,
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.index = (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.get = (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.update = (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
