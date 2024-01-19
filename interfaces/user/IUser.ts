import mongoose from "mongoose";

interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  phone?: string | undefined | null;
  password?: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
  __v?: number;
}

export default IUser;
