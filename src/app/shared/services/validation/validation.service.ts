import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validate = (validations: any[], field: any, form: any) => {
    const errors = [];
    for (const i in validations) {
      if (validations[i]) {
        const validation: any = validations[i];
        if(!this.checkValidation(validation, field, form)) {
          errors.push(this.getValidationMessage(validation, field.label));
        }
      }
    }

    return errors;
  }

  checkValidation = (validationString: any, field: any, form: any) => {
    const validation: any = validationString.indexOf(':') > -1 ? validationString.split(':')[0] : validationString;
    switch (validation) {
      case 'required':
        return this.isRequired(field.value)
        break;
      case 'required_if':
        return this.isRequired_if(field.value, form[validationString.split(':')[1]].value)
        break;
      case 'email':
        return this.isEmail(field.value)
        break;
      case 'same':
        return this.isSame(field.value, form[validationString.split(':')[1]].value)
        break;
    
      default:
        break;
    }

    return false;
  }

  getValidationMessage = (key: string, label: string) => {
    switch (key) {
      case 'required':
        return 'This '+label+' is required';
        break;
      case 'email':
        return 'Invalid Email Address';
        break;
      default:
        return null
        break;
    }
  }

  isRequired(value: any): boolean {
    return value !== undefined && value !== '' && value !== null && value !== 0;
  }

  isRequired_if(value: any, field: any): boolean {
    return field && this.isRequired(field) ? this.isRequired(value) : true;
  }

  isSame(value: any, field: any): boolean {
    return field && this.isRequired(field) ? this.isRequired(value) : true;
  }

  isMinLength(value: any, length: number): boolean {
    return value.length >= length;
  }

  isMaxLength(value: any, length: number): boolean {
    return value.length <= length;
  }

  isBetween(value: any, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  isRegex(value: any, regex: RegExp): boolean {
    return regex.test(value);
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  isAlphabet(value: any): boolean {
    const alphabetRegex = /^[a-zA-Z]+$/;
    return alphabetRegex.test(value);
  }

  isAlphanumeric(value: any): boolean {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
  }

  isPhone(value: any): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value);
  }

  isEmail(value: any): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }

  isUrl(value: any): boolean {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    return urlRegex.test(value);
  }

  isDate(value: any): boolean {
    return !isNaN(Date.parse(value));
  }

  isBefore(value: any, date: Date): boolean {
    return Date.parse(value) < date.getTime();
  }

  isAfter(value: any, date: Date): boolean {
    return Date.parse(value) > date.getTime();
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  isJson(value: any): boolean {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  }

  isAlpha(value: any): boolean {
    const alphaRegex = /^[a-zA-Z]+$/;
    return alphaRegex.test(value);
  }

  isAlphaNumeric(value: any): boolean {
    const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
    return alphaNumericRegex.test(value);
  }

  isNumeric(value: any): boolean {
    return !isNaN(value);
  } 

  isInteger(value: any): boolean {
    return Number.isInteger(value);
  }

  isFloat(value: any): boolean {
    return Number.isFinite(value);
  }

  isDecimal(value: any): boolean {
    return value % 1 !== 0;
  }

  isLowercase(value: any): boolean {
    return value === value.toLowerCase();
  }

  isUppercase(value: any): boolean {
    return value === value.toUpperCase();
  }

  

  isDivisibleBy(value: any, number: number): boolean {
    return value % number === 0;
  }

  isPositive(value: any): boolean {
    return value > 0;
  }

  isNegative(value: any): boolean {
    return value < 0;
  }

  isAscii(value: any): boolean {
    const asciiRegex = /^[\x00-\x7F]+$/;
    return asciiRegex.test(value);
  }

  isMongoId(value: any): boolean {
    const mongoIdRegex = /^[0-9a-fA-F]{24}$/;
    return mongoIdRegex.test(value);
  } 

  isPostalCode(value: any): boolean {
    const postalCodeRegex = /^[0-9]{6}$/;
    return postalCodeRegex.test(value);
  }

  isHexadecimal(value: any): boolean {
    const hexadecimalRegex = /^[0-9a-fA-F]+$/;
    return hexadecimalRegex.test(value);
  }

  isHexColor(value: any): boolean {
    const hexColorRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    return hexColorRegex.test(value);
  }

  isMD5(value: any): boolean {
    const md5Regex = /^[a-f0-9]{32}$/;
    return md5Regex.test(value);
  }


}
