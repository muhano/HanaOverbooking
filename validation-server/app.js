require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes')

const port = process.env.PORT || 3002

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server-validation app listening on port ${port}`)
})