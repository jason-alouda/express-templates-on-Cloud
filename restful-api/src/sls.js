const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
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

app.get('/user', (req, res) => {
  res.send([
    {
      title: 'serverless framework',
      link: 'https://serverless.com'
    }
  ])
})

app.get('/greet', (req, res) => {
  res.send("Hello world!")
})

app.get('/greet/:name',(req, res) => {
  const name = req.params.name
  res.send("Hello world, " + name)
})

module.exports = app;
