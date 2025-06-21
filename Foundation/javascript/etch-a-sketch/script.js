// change backgroun color of a grid when hovered
let hovered = (event) => {
  event.target.style.backgroundColor = "green"
}

// clear the board when user clicks somewhere in the grid
let clear = () => {
  const boxes = document.querySelectorAll('#container div')
  boxes.forEach(box => {
    box.style.backgroundColor = 'transparent'
  })
}

let buttonChangeSize = () => {
  let newSize = prompt("How many rows would you like?")

  const container = document.getElementById('container')
  while (container.firstChild != null) {
    container.removeChild(container.firstChild)
  }
  for (let i = 0; i < newSize; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement('div')
      container.appendChild(div)
    }
  }
  const boxes = document.querySelectorAll('#container div')
  boxes.forEach(box => {
    box.addEventListener('mouseover', hovered)
    box.addEventListener('click', clear)
  })
}

// generate initial grid
let container = document.getElementById('container')
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement('div')
      container.appendChild(div)
    }
  }

// create a button to resize the grid
let buttonContainer = document.getElementById('button-container')
const button = document.createElement('button')
button.innerText = "Adjust Height"
buttonContainer.appendChild(button)

// event listener for button
button.addEventListener('click', buttonChangeSize)

const boxes = document.querySelectorAll('#container div')

boxes.forEach(box => {
  box.addEventListener('mouseover', hovered)
  box.addEventListener('click', clear)
})
