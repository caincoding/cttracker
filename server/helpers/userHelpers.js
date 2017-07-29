import bcrypt from 'bcryptjs'
import User from './../models/user'

module.exports = {
  getUserById: (id, callback) => {
    User.findById(id,callback)
  },  
  getUserByUsername: (userName, callback) => {
    const query = {userName: userName}
    User.findOne(query, callback)
  },
  addUser: (newUser, callback) => {
    bcrypt.genSalt(10,(err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err){
          res.json({
            msg: " there was an error bro"
          })
        }
        newUser.password = hash
        newUser.save(callback)
      })
    })
  },
  comparePassword: (userEnteredPassword, hash, callback) => {
    bcrypt.compare(userEnteredPassword, hash, (err, doesMatch) => {
      if(err){
          res.json({
            msg: " there was an error bro"
          })
        }
        callback(null,doesMatch)
    })
  },
  
}