import { IUser } from "interfaces/user";
import mongoose from "mongoose";
import IQrInfo from "./IQrInfo";

interface IQrCode {
  _id: mongoose.Types.ObjectId;
  user?: IUser["_id"] | null;
  qrInfo?: IQrInfo["_id"] | null;
  status: number;
  createdAt: NativeDate;
  updatedAt: NativeDate;
  __v?: number;
}

export default IQrCode;
