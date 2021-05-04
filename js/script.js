const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonStart = document.getElementById('button-start');
const buttonHelp = document.getElementById('button-help');

let playerScore = 0, 
  computerScore = 0;
 
function startGame() {
  const divGame = document.getElementById("game");
  const divLanding = document.getElementById("landing-page");
  if (divGame.style.display === "none") {
    divGame.style.display = "flex";
    divLanding.style.display = "none";
  } else {
    divGame.style.display = "none";
  }
}

function showInstructions() {
  const divInstructions = document.getElementById("instructions");
  if (divInstructions.style.display === "none") {
    divInstructions.style.display = "flex";
  } else {
    divInstructions.style.display = "none";
  }
}

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove, playerScore, computerScore) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  console.log('Wczytano playerScore: ' + playerScore + '. Wczytano computerScore: ' + computerScore);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (playerMove == computerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    computerScore++;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printScore(playerScore + ' - ' + computerScore);
}

let playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove, playerScore, computerScore);
}

buttonPaper.addEventListener('click', function(){ 
  buttonClicked('papier'); 
});
buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień'); 
});
buttonScissors.addEventListener('click', function(){ 
  buttonClicked('nożyce'); 
});
buttonHelp.addEventListener('click', function (){
  showInstructions();
});
buttonStart.addEventListener('click', function (){
  startGame();
});