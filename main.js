//DOM elements
var centerPileNode = document.querySelector('#centerPile');
var actionNotifier = document.querySelector('#actionNotifier');
var dealCardsButton = document.querySelector('#dealCardsButton');
var buttonContainer = document.querySelector('#buttonContainer');

//Global Variables
var slapjack = new Game();

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
  if (slapjack.centerPile.length > 1 && slapjack.centerPile[0].value === slapjack.centerPile[1].value) {
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

function checkAction() {
  var action;
  if (slapjack.centerPile.length <= 0) {
    return
  } else if (isJack()) {
    action = 'slapjack'
  } else if (isWild()) {
    action = 'wild card'
  } else if (isDouble()) {
    action = 'double'
  } else if (isSandwich()) {
    action = 'sandwich'
  } else {
    action = 'bad slap'
  }

  return action
}

function checkResult(string, player) {
  var result;
  if (string === 'bad slap') {
    result = `forfeits a card to ${slapjack[player.opponent].name}`
  } else {
    result = 'takes the pile'
  }

  return result
}

function preventFromPlaying(player) {
  var playerPile = document.querySelector(`#${player.id}`)
  if (!checkDeck(player)) {
    hide(playerPile, 'invisible')
  }
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
}

function playGame(event) {
  var keyPressed = String.fromCharCode(event.keyCode);
  var p1 = slapjack.playerOne;
  var p2 = slapjack.playerTwo;
  var action = checkAction();
  var result = checkResult(action, p1);
  var result2 = checkResult(action, p2);

  if (keyPressed == 'q') {
    p1.playCard(slapjack)
    hide(actionNotifier, 'invisible')
    console.log('Player One dealt a card!')
  } else if (keyPressed == 'f') {
    p1.slapPile(slapjack)
    unhide(actionNotifier, 'invisible')
    actionNotifier.innerText = `${action.toUpperCase()}! ${p1.name} ${result}!`
    console.log('Player One slapped the pile!')
    winGame(p1)
  } else if (keyPressed == 'p') {
    p2.playCard(slapjack)
    hide(actionNotifier, 'invisible')
    console.log('Player Two dealt a card!')
  } else if (keyPressed == 'j') {
    p2.slapPile(slapjack)
    unhide(actionNotifier, 'invisible')
    actionNotifier.innerText = `${action.toUpperCase()}! ${p2.name} ${result2}!`
    console.log('Player Two slapped the pile!')
    winGame(p2)
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
  var isEnabled = document.onkeydown();
  if (isEnabled && slapjack.centerPile.length === 0 && !checkDeck(slapjack[player.opponent])) {
    player.wins++
    player.isWinner = true;
    displayWins(player)
  }
}

function displayWins(player) {
  var grammar;
  if (player.isWinner === true) {
    actionNotifier.innerText = `${player.name} wins!`
    slapjack.resetDeck(slapjack.playerOne, slapjack.playerTwo)
  }

  if (player.wins === 1) {
    grammar = 'Win'
  } else {
    grammar = 'Wins'
  }

  document.querySelector(`#${player.id}Wins`).innerText = `${player.wins} ${grammar}`
}
