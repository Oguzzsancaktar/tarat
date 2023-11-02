import IUser from "./IUser";

interface IUserCreateDTO extends Pick<IUser, "email" | "password" | "username"> {

}


export default IUserCreateDTO
