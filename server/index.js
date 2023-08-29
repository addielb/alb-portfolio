require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  console.log(`the incoming request is a ${req.method} request for ${req.url}`);
  next();
});

app.listen(process.env.PORT, (() => {
  console.log(`listening on port ${process.env.PORT}!`);
}));