const express = require('express')
const categories = require('./data/categories.json')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon news')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon news is running on ${port}`)
})