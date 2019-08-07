import { AbstractControl } from '@angular/forms';

export function NameValidation(control: AbstractControl) {
  console.log(control);
  console.log('name validation');
  return { validName: false };
}

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}
