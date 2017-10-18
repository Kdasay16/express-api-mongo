'use strict'

const express = require('express')
const mongoose = require('mongoose')
const Promise = require('bluebird')
const bodyParser = require('body-parser').json

const app = module.exports = express()
const router = express.Router() //eslint-disable-line
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost'

const kitchenRoutes = require('./routes/kitchen-routes')
const sectionRoutes = require('./routes/section-routes')

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI)

app.use(bodyParser)
app.use('/api', kitchenRoutes)
app.use('/api', sectionRoutes)

app.listen(PORT, () => console.log(`Watching port ${PORT}`))
