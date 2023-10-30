// Crud Create - Read - Update - Delete
import { UserModel } from "../models";
import { IUser } from '@packages/interfaces';

const createUser = async (user: IUser): Promise<IUser> => {
  return await UserModel.create(user)
}

export default {
  createUser
}
