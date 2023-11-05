import { IUser, IRegisterCredentials, IUserValidation, ILoginCredentials } from "@packages/interfaces";
import { IRegisterState } from "../context";

// AUTH

// Register
const initialRegisterUser: IRegisterCredentials = {
  username: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: '',
}

const initialUserValidations: IUserValidation = {
  email: false,
  username: false,
  password: false,
  passwordConfirm: false,
  phone: false,
  errorMessage: ''
}


const initialRegisterState: IRegisterState = {
  data: initialRegisterUser,
  validation: initialUserValidations,
  step: 0
}


// Login
const initialLoginUser: ILoginCredentials = {
  username: '',
  email: '',
  phone: '',
  password: '',
}






export default {
  // Register
  initialRegisterUser,
  initialUserValidations,
  initialRegisterState,
  // Login
  initialLoginUser,

}
