import ILoginCredentials from "./ILoginCredentials";

interface IRegisterCredentials extends ILoginCredentials {
  confirmPassword: string;
}

export default IRegisterCredentials;
