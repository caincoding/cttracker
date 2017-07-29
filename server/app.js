import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'

import config from './config/database'
import routes from './routes/routes'

// resolves mongoose promise warning message
mongoose.Promise = global.Promise
mongoose.connect(config.database, (err) => {
  if(err) {
    console.log('Connections fucked')
  } else {
    console.log('Connection to database was successful')
  }
})

const app = express()

// MIDDLEWARE
app.use(bodyParser.json())
app.use(cors()) // toDO: setup cors correctly

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.use('/', routes)

export default app