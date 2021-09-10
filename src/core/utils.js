import CONSTANTS from './CONSTANTS';

export const splitStringToArr = (string) => {
  const arr = [];
  let str = '';

  string
    .toString()
    .split('')
    .forEach((symbol, idx, array) => {
      str += symbol;
      CONSTANTS.OPERATORS.forEach(
        (operator) => symbol === operator && arr.push(str) && (str = '')
      );
      !array[idx + 1] && arr.push(str) && (str = '');
    });

  !arr.length && arr.push(str);
  return arr;
};

export const dotCheck = (string) => {
  const splitedString = splitStringToArr(string);
  let dotFlag = true;

  splitedString[splitedString.length - 1]
    .split('')
    .forEach((symbol) => symbol === '.' && (dotFlag = false));
  return dotFlag;
};
