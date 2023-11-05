import { IUser } from "..";

interface IRegisterCredentials extends Pick<IUser, "username" | "email" | "password" | "phone"> {
  passwordConfirm: string;
}

export default IRegisterCredentials;
