import passport from 'passport'
import jwt from 'jsonwebtoken'

import User from './../models/user'
import userHelper from './../helpers/userHelpers'

const userCtlr = {}

userCtlr.userAdd = ( req, res ) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password
  })
  userHelper.addUser(newUser, (err,user) => {
    if(err) {
      res.json({
        msg: "captain kirks nipples!!!!! something went wrong"
      })
    } else {
      res.json({
        msg: "BY ODINS BEARD, IT WORK!!!!"
      })
    }
  })
}

export default userCtlr
