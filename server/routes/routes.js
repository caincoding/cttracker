import express from 'express'
import mongoose from 'mongoose'

const routes = express()

// Controllers 
import clientCtlr from './../controllers/clientCtlr'
import userCtlr from './../controllers/userCtlr'

// Client routes
routes.get('/clients', clientCtlr.getAll)
routes.get('/client/:id', clientCtlr.getOne)
routes.post('/addclient', clientCtlr.addClient)
routes.post('/removeclient/:id', clientCtlr.removeClient)
routes.patch('/updateclient/:id', clientCtlr.updateInfo)

// User routes
routes.post('/adduser',userCtlr.userAdd)
routes.post('/authenticate', userCtlr.authenticate)
  
export default routes