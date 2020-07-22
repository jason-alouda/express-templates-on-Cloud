const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get(`/`, (req, res) => {
  //res.json({ message: "API running" });
  res.send("API running")
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
