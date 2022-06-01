const { Schema, model } = require('mongoose');

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Post title is required.'],
    },
    description: {
      type: String,
      required: [true, 'Content is required.'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
    },
    image: {
      type: String,
      required: [true, 'Upload Image'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Blog', blogSchema);
