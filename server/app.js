require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes')

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})