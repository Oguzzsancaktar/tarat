import { ILoginCredentials } from "../auth";
import IUser from "./IUser";

interface IUserQueryParams {
  _id?: string;
  identifier?: ILoginCredentials['identifier'];
  email?: IUser['email'];
  username?: IUser['username'];
}

export default IUserQueryParams
