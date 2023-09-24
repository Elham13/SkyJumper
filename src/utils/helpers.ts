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
