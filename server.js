const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/booksdb', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(PORT))
  .catch(e => console.log(e))
