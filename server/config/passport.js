import passport from 'passport'
import User from './../models/user'
import config from './database'
import userHelper from './../helpers/userHelpers'

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = () => {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
  opts.secretOrKey = config.secret
  passport.use(new JwtStrategy(opts,(jwt_payload, done) => {
    console.log(jwt_payload)
    userHelper.getUserById( jwt_payload._doc._id,(err, user) => {
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