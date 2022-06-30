let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

const express = require('express')
const app = express()

const nodemon = require('nodemon')