var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, argButtonName, buttonPaper, buttonRock, buttonScissors, buttonStart, buttonHelp, divGame, divLanding, divInstructions;

let playerScore = 0,
  computerScore = 0;

buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonStart = document.getElementById('button-start');
buttonHelp = document.getElementById('button-help');
divGame = document.getElementById("game");
divLanding = document.getElementById("landing-page");
divInstructions = document.getElementById("instructions");

function startGame() {
  if (divGame.style.display === "none") {
    divGame.style.display = "flex";
    divLanding.style.display = "none";
  } else {
    divGame.style.display = "none";
  }
}

function showInstructions() {
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

playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
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