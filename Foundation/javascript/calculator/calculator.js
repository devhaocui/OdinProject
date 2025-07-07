let operator = (op, a, b) => {
  if (op === '+') return a + b
  else if (op === '-') return a - b
  else if (op === '*') return a * b
  else if (op === '/') return a / b
}

let clearDisplay = () => display.textContent = ''

let opState = ''
let num1 = null
let num2 = null

let buttons = document.querySelectorAll('#outer button')
let display = document.querySelector('#display')
let specialSymbols = '+-*/='
let shouldWeClearDisplay = false

buttons.forEach(button => {
  button.addEventListener('click', () => {

    // every time a user clicks something, we ensure it only
    // clears it on the next click. Even if a users presses the
    // + symbol for example, it should not clear until the user
    // has pressed a number 0~9
    if (shouldWeClearDisplay) {
      clearDisplay()
      shouldWeClearDisplay = false
    }

    if (!specialSymbols.includes(button.innerText)) {
      display.textContent += button.innerText
    }
    else if (button.innerText === '=') {
      if (num1 != null && opState && display.textContent) {
        num2 = parseFloat(display.textContent)
        num1 = operator(opState, num1, num2)
        display.textContent = num1
        num2 = 0
        opState = ''
      }
    }
    else {
      if (display.textContent !== '') {
        if (num1 === null) {
          num1 = parseFloat(display.textContent)
        }
        else if (opState) {
          num2 = parseFloat(display.textContent)
          num1 = operator(opState, num1, num2)
          display.textContent = num1
        }
        opState = button.innerText
        shouldWeClearDisplay = true
      }
    }
  })
})
