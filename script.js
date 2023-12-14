
// In script.js
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let turncontol = 1
  function playerSelection(index) {
    let row = Math.floor(index / 3);
    let col = index % 3;
  
    

    
    if (gameBoard[row][col] === '') {

      if(turncontol%2==0){
        gameBoard[row][col] = 'X'; // Assuming 'O' represents the computer's move
        const button = document.getElementById(`button-${index}`);
        button.innerHTML = '<h1>X</h1>';
      }
      else if(turncontol%2==1){
        gameBoard[row][col] = 'O'; // Assuming 'X' represents the player's move
        const button = document.getElementById(`button-${index}`);
        button.innerHTML = '<h1>O</h1>';
      }
      turncontol++;
      
    } else {
      alert('This cell is already selected. Please choose another.');
    }
    console.log(gameBoard);
  
}

  
