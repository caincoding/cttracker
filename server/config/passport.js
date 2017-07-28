const jwtStrategy = require('passport-jwt').jwtStrategy
const extractJwt = require('passport-jwt').ExtractJwt
import User from './../models/user'
import config from './database'

module.exports = () => {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
  opts.secretOrKey = config.secret
  passport.use(new jwtStrategy(opts,(jwt_payload, done) => {
    User.findOne({id: jwt_payload._doc._id},(err, user) => {
      if(err) {
        return done (err, false)
      }
      if(user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  }))
}