import mongoose from 'mongoose'

const {Schema} = mongoose

const clientSchema = new Schema ({
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
  clientEmail: {
    type: String
  },
  clientPhone: {
    type: String,
    required: true
  },
  clientNotes: {
    type: [],
    isDeleted: { 
      type: Boolean, 
      default: false
    } 
  },
  created_At:{
    type: Date,
    default: Date.now
  }
})


const Client = mongoose.model('Client', clientSchema)
export default Client
