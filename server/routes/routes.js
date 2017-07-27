import express from 'express'
const routes = express()

//controllers 
import testCtlr from './../controllers/testCtlr'
import clientCtlr from './../controllers/clientCtlr'

// * routes

routes.get('/', testCtlr.get)
routes.get('/clients', clientCtlr.getAll)
routes.get('/client/:id', clientCtlr.getOne)
routes.post('/addclient', clientCtlr.addClient)
routes.post('/removeclient/:id', clientCtlr.removeClient)
routes.patch('/updateclient/:id', clientCtlr.updateInfo)

export default routes