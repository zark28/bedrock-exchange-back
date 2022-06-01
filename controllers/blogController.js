const Blog = require('../models/Blog');
// const User = require('../models/User');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).send('Post with this ID could not be found.');
    }
    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description, category, image } = req.body;

    //create Blog

    const blog = await Blog.create({
      title,
      description,
      category,
      image,
    });

    res.status(201).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });
    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    await Blog.findOneAndDelete({ _id: blogId });
    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
