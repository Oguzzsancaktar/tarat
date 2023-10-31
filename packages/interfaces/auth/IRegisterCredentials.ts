import { IUser } from "..";

interface IRegisterCredentials extends Pick<IUser, "username" | "email" | "password"> {
  passwordConfirm: string;
}

export default IRegisterCredentials;
