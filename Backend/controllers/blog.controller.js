const Blog = require("../model/blog.model");

exports.store = async (req, res) => {
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

exports.index = async (req, res) => {
  try {
    const { userId } = req.query;
    const query = {};
    if (userId) {
      query.userId = userId;
    }
    const blogs = await Blog.find(query); // only find change hua h is mai bus
    console.log("🚀 ~ exports.index= ~ blogs:", blogs);
    return res.json({
      status: 200,
      success: true,
      message: "Blogs Fetched Successfully",
      blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id }); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Fetched Successfully",
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOneAndDelete({ _id: id }); // only find change hua h is mai bus
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
    const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }); // only find change hua h is mai bus
    return res.json({
      status: 200,
      success: true,
      message: "Blog Updated Successfully",
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};

// exports.update = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });
//     return res.json({
//       status: 200,
//       success: true,
//       message: "Blog Updated Successfully",
//       blog,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
