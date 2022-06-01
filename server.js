const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 4000;

// connecting to database
require('./config/dbConnect');

// consting routes
const blogRoutes = require('./routers/blogRoutes');
const authRoutes = require('./routers/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', (req, res) => res.json('hello world'));
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// catch all routes not on the server
app.all('*', (req, res, next) => {
  res
    .status(404)
    .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

//
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = app.listen(port, () => console.log('Server up and running'));
