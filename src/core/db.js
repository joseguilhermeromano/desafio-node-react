const config = require('./config_db')

const mongoose = require('mongoose')

const options = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

mongoose.connect(process.env.MONGODB_URI || config.connectionString, options)

mongoose.Promise = global.Promise

module.exports = {
    User: require('../models/user')
}