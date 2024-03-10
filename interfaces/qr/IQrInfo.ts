import mongoose from "mongoose";

interface IQrInfo {
  _id: mongoose.Types.ObjectId;
  qrCode: mongoose.Types.ObjectId;
  info: object;
  createdAt: NativeDate;
  updatedAt: NativeDate;
  __v?: number;
}

export default IQrInfo;
