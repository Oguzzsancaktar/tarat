import { IUser } from "../../interfaces";

interface ILoginCredentials extends Pick<IUser, "password"> {
  email?: IUser["email"]
  username?: IUser["username"]
  phone?: IUser["phone"]
}

export default ILoginCredentials;
