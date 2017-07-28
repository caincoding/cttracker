import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from './config/database'
import routes from './routes/routes'
mongoose.Promise = global.Promise
mongoose.connect(config.database, (err) => {
  if(err) {
    console.log('Connections fucked')
  } else {
    console.log('Connection to database was successful')
  }
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)

export default app