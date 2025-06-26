const palindromes = (str) => {
  let newStr = str
  .toLowerCase()
  .split('')
  .filter(char => /[a-z0-9]/.test(char))
//  .join(''); // joins it back into a string, but sinc we're only returning
               // a true/false bool value, it doesn't matter in this case. 

  let begin = 0;
  let end = newStr.length - 1;
  while (begin < end) {
    if (newStr[begin] !== newStr[end]) {
      return false;
    }
    begin++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
