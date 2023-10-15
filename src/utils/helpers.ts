import {Activity} from '../types/stateTypes';

export const insertOrRemoveFromArray = (
  array: Activity[],
  element: Activity,
): Activity[] => {
  const tempArr = array;
  const index = tempArr.findIndex(el => el.title === element.title);
  if (index !== -1) tempArr.splice(index, 1);
  else tempArr.push(element);
  return tempArr;
};

export const camelCaseToProperCase = (input: string) => {
  let result = '';
  let prevChar = ''; // Keep track of the previous character

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    // If the current character is uppercase and not the first character
    if (currentChar === currentChar.toUpperCase() && i !== 0) {
      result += ' '; // Add a space before the uppercase character
    }

    result += i === 0 ? currentChar.toUpperCase() : currentChar.toLowerCase();
    prevChar = currentChar;
  }

  return result;
};

export const generateCouponCode = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const couponArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    couponArray.push(characters.charAt(randomIndex));
  }

  return couponArray.join('');
};

export const formatLog = (data: any) => {
  return JSON.stringify(data, null, 2);
};
