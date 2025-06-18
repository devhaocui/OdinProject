let humanScore = 0
let computerScore = 0

let getComputerChoice = () => {
  let choices = ['rock', 'paper', 'scissor']
  let random = Math.floor(Math.random() * 3)
  return choices[random]
}

let playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toUpperCase()
  computerChoice = computerChoice.toUpperCase()

  if (humanChoice == 'ROCK') {
    if (computerChoice == 'PAPER') {
      return computerScore++;
    }
    else if (computerChoice == 'SCISSOR') {
      return humanScore++;
    }
    // no need to else since if it ties nobody gets a point
  }
  if (humanChoice == 'PAPER') {
    if (computerChoice == 'ROCK') {
      return humanScore++;
    }
    else if (computerChoice == 'SCISSOR') {
      return humanScore++;
    }
  }
  if (humanChoice == 'SCISSOR') {
    if (computerChoice == 'ROCK') {
      return computerScore++;
    }
    else if (computerChoice == 'PAPER') {
      return humanScore++;
    }
  }
}

for (let i = 0; i < 5; i++) {
  let choices = ['rock', 'paper', 'scissor']
  let r1 = Math.floor(Math.random() * 3)
  let r2 = Math.floor(Math.random() * 3)
  playRound(choices[r1], choices[r2])
}
console.log(humanScore)
console.log(computerScore)

