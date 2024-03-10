// Crud Create - Read - Update - Delete
import mongoose, { PipelineStage } from "mongoose";
import { QRModel } from "../models";
import { IQrCode, IUser, IUserCreateDTO } from "interfaces";

// Create
const createQr = async (): Promise<IQrCode> => {
  const newQr: IQrCode = await QRModel.create({
    user: null,
    qrInfo: null,
    status: 0
  })
  return newQr
}

// Read
const getQr = async (qrId?: IQrCode["_id"]): Promise<IQrCode[] | null> => {
  const pipeline: PipelineStage[] = []

  if (qrId) {
    pipeline.push({
      $match: {
        _id: new mongoose.Types.ObjectId(qrId)
      }
    })
  } else {
    pipeline.push({
      $match: {}
    })
  }

  return await QRModel.aggregate(pipeline).exec()
}

// Update

// const updateQr = async (userId: IUser["_id"], updatedUserDTO: IUser): Promise<IQrCode | undefined | null> => {
//   return await QRModel.findByIdAndUpdate(userId, updatedUserDTO, { new: true }).exec()
// }

// Delete


export default {
  createQr,
  // updateQr,
  getQr
}
