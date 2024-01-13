// Crud Create - Read - Update - Delete
import { PipelineStage } from "mongoose";
import { UserModel } from "../models";
import { IUserQueryParams, IUser, IUserCreateDTO } from "interfaces";

// Create
const createUser = async (user: IUserCreateDTO): Promise<IUser> => {
  return UserModel.create(user)
}

// Read
const getUser = async (userInfo: IUserQueryParams): Promise<IUser[] | null> => {
  const pipeline: PipelineStage[] = []

  if (!userInfo?._id && !userInfo?.identifier) {
    return null
  }


  if (userInfo?._id) {
    pipeline.push({
      $match: {
        _id: userInfo._id
      }
    })
  }

  if (userInfo?.email) {
    pipeline.push({
      $match: {
        email: userInfo.email
      }
    })
  }

  if (userInfo?.username) {
    pipeline.push({
      $match: {
        username: userInfo.username
      }
    })
  }

  if (userInfo?.identifier) {
    pipeline.push({
      $match: {
        $or: [
          { username: userInfo.identifier },
          { email: userInfo.identifier },
          { phone: userInfo.identifier }
        ]
      }
    })
  }



  return await UserModel.aggregate(pipeline).exec()
}

// Update

const updateUser = async (user: IUser): Promise<IUser | undefined | null> => {
  // const pipeline: PipelineStage[] = []

  // if (!userInfo?._id && !userInfo?.identifier) {
  //   return null
  // }

  // if (userInfo?._id) {
  //   pipeline.push({
  //     $match: {
  //       _id: userInfo._id
  //     }
  //   })
  // }

  // if (userInfo?.identifier) {
  //   pipeline.push({
  //     $match: {
  //       $or: [
  //         { username: userInfo.identifier },
  //         { email: userInfo.identifier },
  //         { phone: userInfo.identifier }
  //       ]
  //     }
  //   })
  // }
  return UserModel.findOneAndUpdate(user?._id, user, { new: true }).exec()
}

// Delete


export default {
  createUser,
  updateUser,
  getUser
}
