// Crud Create - Read - Update - Delete
import { UserModel } from "../models";
import { IUser, IUserCreateDTO, IUserQueryParams } from '@packages/interfaces';

// Create
const createUser = async (user: IUserCreateDTO): Promise<IUser> => {
  return await UserModel.create(user)
}

// Read
const getUser = async (userInfo: IUserQueryParams): Promise<IUser | null> => {
  const pipeline = []

  if (!userInfo._id && !userInfo.email && !userInfo.username) {
    return null
  }
  return await UserModel.aggregate(pipeline).exec()
}

// Update
// Delete


export default {
  createUser,
  getUser
}
