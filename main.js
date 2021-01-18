//DOM elements
var playerOnePile = document.querySelector('#playerOne');
var playerTwoPile = document.querySelector('#playerTwo');
var centerPileNode = document.querySelector('#centerPile');
var actionNotifier = document.querySelector('#actionNotifier');
var dealCardsButton = document.querySelector('#dealCardsButton');
var buttonContainer = document.querySelector('#buttonContainer');
//Global Variables
var slapjack = new Game();
// var p1;
// var p2;


//Event listeners
window.addEventListener('load', disableGame);
window.addEventListener('load', displayWins(slapjack.playerOne));
window.addEventListener('load', displayWins(slapjack.playerTwo));
document.addEventListener('keypress', playGame);
dealCardsButton.addEventListener('click', dealCardsToPlayers);

//Functions
function hide(element, rule) {
  return element.classList.add(rule);
}

function unhide(element, rule) {
  return element.classList.remove(rule);
}

function isJack() {
  if (slapjack.centerPile[0].value === 'jack') {
    return true
  } else {
    return false
  }
}

function isDouble() {
  if (slapjack.centerPile[0].value === slapjack.centerPile[1].value) {
    return true
  } else {
    return false
  }
}

function isSandwich() {
  if (slapjack.centerPile.length > 2 && slapjack.centerPile[0].value === slapjack.centerPile[2].value) {
    return true
  } else {
    return false
  }
}

function isWild() {
  for (var i = 0; i < 4; i++) {
    if (slapjack.centerPile[i].value === 'wild') {
      return true
    } else {
      return false
    }
  }
}

function checkOpponent(player) {
  var opponent;
  if (player.id === 'playerOne') {
    opponent = 'playerTwo'
  } else {
    opponent = 'playerOne'
  }
  return opponent
}

function checkDeck(player) {
  var hasCards;
  if(player.hand.length > 0) {
    hasCards = true
  } else {
    hasCards = false
  }
  return hasCards
}

function takePile(player, game) {
  for (var i = 0; i < game.centerPile.length; i++) {
    player.hand.push(game.centerPile[i]);
  }
}

function clearPile(game) {
    game.centerPile = []
}

function disableGame() {
  console.log('buttons disabled')
  document.onkeydown = function (event) {
    return false
  }
}

function enableGame() {
  document.onkeydown = function (event) {
    return true
  }
}

function dealCardsToPlayers() {
  enableGame();
  slapjack.dealCards();
  hide(buttonContainer, 'hidden')
  unhide(centerPileNode, 'hidden')
  hide(centerPileNode, 'invisible')
  // displayAction();
}

function playGame(event) {
  var keyPressed = String.fromCharCode(event.keyCode);
  var p1 = slapjack.playerOne;
  var p2 = slapjack.playerTwo;
  // var message;
  if (keyPressed == 'q') {
    p1.playCard(slapjack)
    hide(actionNotifier, 'invisible')
    console.log(keyPressed)
    console.log('Player One dealt a card!')
    // actionNotifier.innerText  = 'Player 1 dealt a card!'
  } else if (keyPressed == 'f') {
    p1.slapPile(slapjack)
    unhide(actionNotifier, 'invisible')
    winGame(p1)
    console.log(winGame(p1))
    console.log('Player One slapped the pile!')
    actionNotifier.innerText  = 'Player 1 slapped the pile!'
  } else if (keyPressed == 'p') {
    p2.playCard(slapjack)
    hide(actionNotifier, 'invisible')
    console.log(keyPressed)
    console.log('Player Two dealt a card!')
    // actionNotifier.innerText  = 'Player 2 dealt a card!'
  } else if (keyPressed == 'j') {
    p2.slapPile(slapjack)
    unhide(actionNotifier, 'invisible')
    winGame(p2)
    console.log(winGame(p2))
    console.log('Player Two slapped the pile!')
    actionNotifier.innerText  = 'Player 2 slapped the pile!'
  } else {
    console.log(keyPressed)
    console.log('Keep trying!')
    actionNotifier.innerText  = 'Whoops!'
  }
  displayTopCard()
}

function displayTopCard() {
  if (slapjack.centerPile.length > 0) {
    var topCardImage = slapjack.centerPile[0].image;
    var topCardType = slapjack.centerPile[0].type;
    var topCardValue = slapjack.centerPile[0].value;
    unhide(centerPileNode, 'invisible')
    centerPileNode.innerHTML =
      `<img id="topCard" src=${topCardImage} alt="${topCardType} ${topCardValue}">`
    console.log(slapjack.centerPile)
  } else {
    hide(centerPileNode, 'invisible')
  }
}

function winGame(player) {
  var gameWinner;
  var isEnabled = document.onkeydown();
  if (isEnabled && slapjack.centerPile.length === 0 && !checkDeck(slapjack[player.opponent])) {
    slapjack.pronounceWinner(player)
    slapjack.resetDeck(slapjack.playerOne, slapjack.playerTwo)
  }

}

function displayWins(player) {
  var grammar;
  var gameWinner;
  if (player.id === 'playerOne') {
    gameWinner = 'Player 1';
  } else {
    gameWinner = 'Player 2';
  }

  if (player.isWinner === true) {
    actionNotifier.innerText = `${gameWinner} wins!`
  }

  if (player.wins === 1) {
    grammar = 'Win'
  } else {
    grammar = 'Wins'
  }
  document.querySelector(`#${player.id}Wins`).innerText = `${player.wins} ${grammar}`
}
