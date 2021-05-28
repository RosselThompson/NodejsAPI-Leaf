require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;
const dbConnection = process.env.DB_CONNECTION || '';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes.v1(app);

mongoose.connect(
  dbConnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Database Connection Error... ${err}`);
    }
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
);
