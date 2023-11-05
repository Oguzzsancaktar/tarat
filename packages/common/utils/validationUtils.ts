import { IRegisterCredentials, IUserValidation } from "@packages/interfaces/index";
import { trim } from "lodash";
import { DEFAULTS, VALIDATION_MESSAGES } from "../constants";

const validateRegisterData = (data: IRegisterCredentials): IUserValidation => {
  const { username, email, phone, password, passwordConfirm } = data;

  const validation: IUserValidation = { ...DEFAULTS.initialUserValidations }

  if (!username || trim(username) === '') {
    validation.username = true;

    // @todo - berk - VALIDATION_MESSAGES dosyasına mesajları tanımla ve burda çek.
    validation.errorMessage = VALIDATION_MESSAGES.usernameRequired
    return validation;
  }

  if (!email || trim(email) === '') {
    validation.email = true;
    validation.errorMessage = 'Email is required';
    return validation;
  }


  if (!password || trim(password) === '') {
    validation.password = true;

    validation.errorMessage = 'Password is required';
    return validation;
  }

  if (!passwordConfirm || trim(passwordConfirm) === '') {
    validation.passwordConfirm = true;

    validation.errorMessage = 'Password confirm is required';
    return validation;
  }

  if (trim(passwordConfirm) !== trim(password)) {
    validation.passwordConfirm = true;
    validation.password = true;
    validation.errorMessage = 'Password confirm must match password';
    return validation;
  }


  if (!phone || trim(phone) === '') {
    validation.phone = true;
    validation.errorMessage = 'Phone is required';
    return validation;
  }


  return validation;
}


export default {
  validateRegisterData
}
