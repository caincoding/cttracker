import Client from './../models/client'
const clientCtlr = {}



// client GET request
clientCtlr.getAll = ( req, res )=> {
  Client.find(( err, client)=>{
    if(err){
      res.json({
        msg: "WE FUCKED UP, GO BACK AND TRY AGAIN!!!!"
      })
    } else {
      res.json(client)
    }
  })
}

clientCtlr.getOne = ( req, res )=> {
 Client.findOne((err, client) =>{
   if(err) {
     res.json({
       msg: "SHITS FUCKED"
     })
   } else {
     res.json(client)
   }
 })
}
// client POST request
clientCtlr.addClient = ( req, res )=> {
  let newClient = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    clientEmail: req.body.clientEmail,
    clientPhone: req.body.clientPhone,
    clientNotes: req.body.clientNotes
  })
  newClient.save((err)=> {
    if(err) {
       console.log(err)
      res.json({
        msg: "YOU DONE FUCKED UP A-ARON!!!!"
      })
    } else {
      res.json({
        msg: "YOU ARE NOT A TOTAL IDIOT FUCKTARD!!!! have a crayon and stop licking windows"
      })
      console.log(newClient)
    }
  })
}

clientCtlr.updateInfo = ( req, res )=> {
  Client.findById(req.params.id,(err,client)=> {
    console.log(req.params.id)
    if(err) {
      res.json({
        msg: "SHITS FUCKED MATE!!!"
      })
    } else {
      client.firstName = req.body.firstName || client.firstName,
      client.lastName = req.body.lastName || client.lastName,
      client.clientEmail = req.body.clientEmail || client.clientEmail,
      client.clientPhone = req.body.clientPhone || client.clientPhone,
      client.clientNotes = req.body.clientNotes || client.clientNotes
       
      client.save((err, client )=>{
        if(err){
          res.json({
            msg:"YOU ARE USELESS...JUST LIKE THIS FUNCTION"
          })
        } else {
          res.json
        }
      })
    }
  })  
}

clientCtlr.removeClient = ( req, res )=> {
  Client.findByIdAndRemove(req.params.id,(err,client )=> {
    if(err) {
      res.json({
        mgs: "You fucked up bro"
      })
    } else {
      res.json({
        mgs: "client deleted successfully"
      })
    }
  })
}

export default clientCtlr