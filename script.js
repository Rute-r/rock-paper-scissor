const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const winnerText = document.querySelector('#winnerText');
const buttons = document.querySelectorAll('.btn');

let player;
let computer;
let winner;

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `You: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    winnerText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return 'Draw!';
  } else if (computer === 'ROCK') {
    return player == 'PAPER' ? 'You Win!' : 'Computer Wins!';
  } else if (computer == 'PAPER') {
    return player == 'SCISSORS' ? 'You Win!' : 'Computer Wins!';
  } else if (computer == 'SCISSORS') {
    return player == 'ROCK' ? 'You Win!' : 'Computer Wins!';
  }
}
