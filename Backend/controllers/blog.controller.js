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

exports.index = async (req, res, next) => {
  try {
    const blogs = await Blog.find(); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Fetcched Successfully",
      blogs,
    });
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
