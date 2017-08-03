import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import jwt from 'jsonwebtoken'

const routes = express()

// Controllers 
import clientCtlr from './../controllers/clientCtlr'
import userCtlr from './../controllers/userCtlr'

// Client routes
routes.get('/clients', passport.authenticate('jwt', {session: false}) , clientCtlr.getAll)
routes.get('/client/:id',  passport.authenticate('jwt', {session: false}) , clientCtlr.getOne)
routes.post('/addclient', passport.authenticate('jwt', {session: false}), clientCtlr.addClient)
routes.post('/removeclient/:id', passport.authenticate('jwt', {session: false}) ,clientCtlr.removeClient)
routes.patch('/updateclient/:id', passport.authenticate('jwt', {session: false}) ,clientCtlr.updateInfo)

// User routes
routes.post('/adduser', passport.authenticate('jwt', {session: false}) ,userCtlr.userAdd)
routes.post('/authenticate', userCtlr.authenticate)
  
export default routes