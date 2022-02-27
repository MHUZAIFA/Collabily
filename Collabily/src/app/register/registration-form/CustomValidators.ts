import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class CustomValidators {
  // public static passwordMatchingValidatior: ValidatorFn = (
  //   control: AbstractControl
  // ): ValidationErrors | null => {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');

  //   return password?.value === confirmPassword?.value
  //     ? null
  //     : { notmatched: true };
  // };

  public static passwordMatchingValidatior(control: AbstractControl) {

    let password = control.get('password')?.value;

    let confirmpassword = control.get('confirmPassword')?.value;

    if (password != confirmpassword) {
      control.get('confirmpassword')?.setErrors({ notmatched: true });
      return;
    } else {
      return null;
    }
  }

  public static InvalidPassword(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const password = control.value;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    const has8Chars = password.length >= 8;
    let i = 0;
    while (i <= password.length) {
      const character = password.charAt(i);
      if (!isNaN(character)) {
        hasNumber = true;
      } else {
        if (character == character.toUpperCase()) {
          hasUpperCase = true;
        }
        if (character == character.toLowerCase()) {
          hasLowerCase = true;
        }
      }
      i++;
    }
    return hasUpperCase && hasNumber && hasLowerCase && has8Chars
      ? null
      : { passwordInvalid: true };
  }
}
