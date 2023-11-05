import { IUser, IRegisterCredentials, IUserValidation } from "@packages/interfaces";
import { IRegisterState } from "../context/registerContext";

// AUTH

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


export default {
  initialRegisterUser,
  initialUserValidations,
  initialRegisterState,
}
