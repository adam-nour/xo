let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let turnControl = 0;

function playerSelection(index) {
  let row = Math.floor(index / 3);
  let col = index % 3;

  if (gameBoard[row][col] === '') {
    if (turnControl % 2 === 0) {
      gameBoard[row][col] = 'X';
      const button = document.getElementById(`button-${index}`);
      button.innerHTML = '<h1>X</h1>';
    } else if (turnControl % 2 === 1) {
      gameBoard[row][col] = 'O';
      const button = document.getElementById(`button-${index}`);
      button.innerHTML = '<h1>O</h1>';
    }
    turnControl++;
    console.log(gameBoard);

    // Check for a winner or a draw after each move
    if (checkWinner('X')) {
      console.log('Player X wins!');
    } else if (checkWinner('O')) {
      console.log('Player O wins!');
    } else if (isDraw()) {
      console.log('It\'s a draw!');
    }
  } else {
    alert('This cell is already selected. Please choose another.');
  }
}


function checkWinner(player) {
  // Check rows and columns for a winner
  for (let i = 0; i < 3; i++) {
    if (
      (gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player) ||
      (gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player)
    ) {
      return true;
    }
  }

  // Check diagonals for a winner
  if (
    (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) ||
    (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player)
  ) {
    return true;
  }

  return false;
}


function isDraw() {
  // Check for empty spots on the board
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameBoard[row][col] === '') {
        return false; 
      }
    }
  }

  
  return !checkWinner('X') && !checkWinner('O');
}

