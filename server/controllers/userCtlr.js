import jwt from 'jsonwebtoken'
import passport from 'passport'
import User from './../models/user'
import userHelper from './../helpers/userHelpers'
import config from './../config/database'

const userCtlr = {}

// POST route to add user to application
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

  // POST route to authenticate a user
userCtlr.authenticate = ( req, res ) => {
  const userName = req.body.userName
  const password = req.body.password

  userHelper.getUserByUsername(userName, ( err, user ) => {
    if(err) {
      res.json({
        msg: "Somethings fucky"
      })
    }
    if(!user) {
      return res.json({
        msg: "User not found"
      })
    }

    userHelper.comparePassword(password, user.password, ( err, doesMatch) => {
      if(err) {
        res.json({
          msg: " Shits fucked bro"
        })
      }
      if(doesMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        })

        res.json({
          token: 'JWT '+ token,
          user: {
            id: user._id,
            userName: user.userName
          }
        })
      } else {
        return res.json({
          msg: " Wrong password fucko"
        })
      }
    })
  })
}

export default userCtlr
