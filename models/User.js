const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blogs',
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
