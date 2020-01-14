const express = require('express')
const app = express()
const port = 3000;

app.get("/", (req, res, next) => {
  res.send("Welcome to main route!")
})

app.get("/about", (req, res, next) => {
  res.send("This is the about route!")
})

// this matches all routes and all methods
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Not found'
  })
})

app.listen(port, () => console.log(`App listening on port: ${port}`))