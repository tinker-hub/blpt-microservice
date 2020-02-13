import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

export const formatterUtil = {
  phoneNumber: (value: string, country: CountryCode = 'PH') => {
    return parsePhoneNumberFromString(value, country).number.toString();
  }
};
