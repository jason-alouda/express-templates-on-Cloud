const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get(`/`, (req, res) => {
  res.send("This is a GET request");
})

app.post(`/`, (req, res) => {
  res.send("This is a POST request");
})

app.put(`/`, (req, res) => {
  res.send("This is a PUT request");
})

app.delete(`/`, (req, res) => {
  res.send("This is a DELETE request");
})

app.get('/greet', (req, res) => {
  res.send("Hello world!")
})

app.get('/greet/:name',(req, res) => {
  const name = req.params.name
  res.send("Hello world, " + name)
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
