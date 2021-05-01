var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, argButtonName, buttonPaper, buttonRock, buttonScissors, buttonStart, buttonHelp, divGame, divLanding, divInstructions;

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

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (playerMove == computerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
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