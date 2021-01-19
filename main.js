var centerPileNode = document.querySelector('#centerPile');
var actionNotifier = document.querySelector('#actionNotifier');
var dealCardsButton = document.querySelector('#dealCardsButton');
var buttonContainer = document.querySelector('#buttonContainer');

var slapjack = new Game();
var p1 = slapjack.playerOne;
var p2 = slapjack.playerTwo;

window.addEventListener('load', displayWins(p1));
window.addEventListener('load', displayWins(p2));
document.addEventListener('keypress', playGame);
dealCardsButton.addEventListener('click', dealCardsToPlayers);

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
  var topCard = slapjack.centerPile[0].value;
  var secondCard = slapjack.centerPile[1].value;
  if (slapjack.centerPile.length > 1 && topCard === secondCard) {
    return true
  } else {
    return false
  }
}

function isSandwich() {
  var topCard = slapjack.centerPile[0].value;
  var thirdCard = slapjack.centerPile[2].value;
  if (slapjack.centerPile.length > 2 && topCard === thirdCard) {
    return true
  } else {
    return false
  }
}

function isWild() {
  for (var i = 0; i < 3; i++) {
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

function checkHand(player) {
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
  } else if (!checkHand(p1) || !checkHand(p2)) {
    action = 'uh oh'
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

function checkResult(string, player, opponent) {
  var result;
  if (string !== 'uh oh' && string !== 'bad slap' && checkHand(opponent)) {
    result = 'takes the pile'
  } else if (string === 'bad slap') {
    result = `forfeits a card to ${opponent.name}`
  } else if (!isJack() && !checkHand(opponent)) {
    result = 'can only win on SlapJack - keep playing'
  } else if (!checkHand(player)) {
    result = `doesn't have a card to give. ${opponent.name} wins`
    clearPile(slapjack);
    winGame(opponent, player);
  } else {
    result = 'wins'
  }

  return result
}

function clearPile(game) {
    game.centerPile = []
}

function takePile(player, game) {
  for (var i = 0; i < game.centerPile.length; i++) {
    player.hand.push(game.centerPile[i]);
  }
}

function forfeitCard(player, opponent) {
  var topCard = player.hand.shift();
  opponent.hand.push(topCard);
}

function dealCardsToPlayers() {
  slapjack.dealCards();
  hide(buttonContainer, 'hidden');
  unhide(centerPileNode, 'hidden');
  hide(centerPileNode, 'invisible');
  actionNotifier.innerText = 'Player 1, you\'re up!';
}

function playGame(event) {
  var keyPressed = String.fromCharCode(event.keyCode);
  if (keyPressed == 'q') {
    p1.playCard(slapjack);
  } else if (keyPressed == 'f') {
    actionNotifier.innerText = slapjack.compileMessage(p1);
    p1.slapPile(slapjack);
    unhide(actionNotifier, 'invisible');
    setTimeout(function() { hide(actionNotifier, 'invisible') }, 5000)
  } else if (keyPressed == 'p') {
    p2.playCard(slapjack);
  } else if (keyPressed == 'j') {
    actionNotifier.innerText = slapjack.compileMessage(p2);
    p2.slapPile(slapjack);
    unhide(actionNotifier, 'invisible');
    setTimeout(function() { hide(actionNotifier, 'invisible') }, 5000);
  } else {
    return
  }

  displayTopCard();
}

function displayTopCard() {
  if (slapjack.centerPile.length > 0) {
    var topCardImage = slapjack.centerPile[0].image;
    var topCardType = slapjack.centerPile[0].type;
    var topCardValue = slapjack.centerPile[0].value;
    unhide(centerPileNode, 'invisible');
    centerPileNode.innerHTML =
      `<img id="topCard" src=${topCardImage} alt="${topCardType} ${topCardValue}">`
  } else {
    hide(centerPileNode, 'invisible');
  }
}

function winGame(player, opponent) {
  if (slapjack.centerPile.length === 0 && !checkHand(opponent)) {
    player.isWinner = true;
    player.saveWinsToStorage();
    displayWins(player);
  }
}

function getWins(player) {
  var localWins = localStorage.getItem(`${player.id}Wins`);
  var parsedWins = JSON.parse(localWins);
  return parsedWins
}

function displayWins(player) {
  var grammar;
  var winsToDisplay = player.wins;
  if (player.isWinner) {
    setTimeout(function() { slapjack.resetGame() }, 4000);
  }

  if (winsToDisplay === 1) {
    grammar = 'Win'
  } else {
    grammar = 'Wins'
  }

  document.querySelector(`#${player.id}Wins`).innerText = `${winsToDisplay} ${grammar}`
}
