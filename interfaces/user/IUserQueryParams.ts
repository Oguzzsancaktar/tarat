import mongoose from "mongoose";
import { ILoginCredentials } from "../auth";
import IUser from "./IUser";

interface IUserQueryParams {
  _id?: string | mongoose.Types.ObjectId;
  identifier?: ILoginCredentials['identifier'];
  email?: IUser['email'];
  username?: IUser['username'];
}

export default IUserQueryParams
