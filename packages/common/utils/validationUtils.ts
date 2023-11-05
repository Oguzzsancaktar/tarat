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
    validation.errorMessage = VALIDATION_MESSAGES.emailRequired
    return validation;
  }


  if (!password || trim(password) === '') {
    validation.password = true;

    validation.errorMessage = VALIDATION_MESSAGES.passwordRequired
    return validation;
  }

  if (!passwordConfirm || trim(passwordConfirm) === '') {
    validation.passwordConfirm = true;

    validation.errorMessage = VALIDATION_MESSAGES.passwordConfirmRequired
    return validation;
  }

  if (trim(passwordConfirm) !== trim(password)) {
    validation.passwordConfirm = true;
    validation.password = true;
    validation.errorMessage = VALIDATION_MESSAGES.passwordMatchRequired
    return validation;
  }


  if (!phone || trim(phone) === '') {
    validation.phone = true;
    validation.errorMessage = VALIDATION_MESSAGES.phoneRequired
    return validation;
  }


  return validation;
}


export default {
  validateRegisterData
}
