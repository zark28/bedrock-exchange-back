const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://bedrock:DhuR3hXP8UTLfj9@cluster0.ycwzi.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log(err.message));
