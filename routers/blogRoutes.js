const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
// const { verifyToken } = require('../controllers/authController');

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router
  .route('/:blogId')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
