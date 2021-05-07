const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Just like how we connected to MYSQL using the MYSQL library or the SEQUELIZE library, we need to connect to the mongodb library using mongoose
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
})
