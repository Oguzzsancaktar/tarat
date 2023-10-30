import mongoose, { Schema } from "mongoose";

// ---- USER ----- //
// - qrcodes 
// - addres info detail 


const userSchema = new Schema({
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
}, {
  timestamps: true
})


const UserModel = mongoose.model('User', userSchema)

export default UserModel
