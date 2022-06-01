const mongoose = require('mongoose');
const MONGODB_URI =
  'mongodb+srv://bedrock:DhuR3hXP8UTLfj9@cluster0.ycwzi.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log(err.message));
