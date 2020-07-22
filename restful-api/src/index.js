'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

api.get("/", (req, res) => {
  //res.json({ message: "API running" });
  res.send("API running")
});

app.get('/greet', (req, res) => {
  res.send("Hello world!")
});

app.get('/greet/:name'),(req, res) => {
  res.send("Hello world, " + req.params.name)
});

module.exports = app;
