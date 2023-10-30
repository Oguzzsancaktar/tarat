import { IUser } from "../../interfaces";

interface ILoginCredentials extends Pick<IUser, "password" | "email"> { }

export default ILoginCredentials;
