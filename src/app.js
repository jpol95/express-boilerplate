require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./middleware/bearer-token')
const errorHandler = require('./middleware/error-handler')

const app = express();

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting))
app.use(helmet());
app.use(cors());

app.use(errorHandler)
app.use(validateBearerToken);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
