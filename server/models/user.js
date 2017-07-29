import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema ({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'First name needs to be atleast 3 characters in length fucker']
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, 'Last name needs to be atleast 3 characters in length fucker']
  },
  userName: {
    type: String,
    required: true,
    minLength: [3, 'Last name needs to be atleast 3 characters in length fucker']
  },
  password: {
    type: String,
    required: true,
    minLength: [8, 'Password needs to be atleast 8 characters in length fucker']
  },
  created_At:{
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)
export default User


// maybe add isAdmin to the schema? 