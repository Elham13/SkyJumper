export const insertOrRemoveFromArray = (
  array: string[],
  element: string,
): string[] => {
  const tempArr = array;
  const index = tempArr.indexOf(element);
  if (index !== -1) tempArr.splice(index, 1);
  else tempArr.push(element);
  console.log('tremp: ', tempArr);
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
