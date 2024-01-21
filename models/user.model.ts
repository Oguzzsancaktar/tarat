import mongoose, { Schema } from "mongoose";

// ---- USER ----- //
// - qrcodes
// - addres info detail


const userSchema = new Schema({
  username: {
    required: true,
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    // @be-todo check best practice
    required: false,
    type: String,
    default: "",
    // unique: false,
    // trim: true,
    // lowercase: true
  },
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    required: true,
    type: String,
    trim: true,
  },
  contactInformations: {
    type: Object,
    default: {}
  },
  personalInformations: {
    type: Object,
    default: {}
  },
  addressInformations: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true
})


const UserModel = mongoose.model('User', userSchema)

export default UserModel
