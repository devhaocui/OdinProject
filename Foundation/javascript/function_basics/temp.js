let add7 = (num) => num + 7

let multiply = (num1, num2) => num1 * num2

let capitalize = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i]
    }
  }
}

let lastLetter = (str) => str[str.length - 1];

console.log(add7(1));

console.log(capitalize("abcDefg"))

console.log(lastLetter("abcdefg"))
