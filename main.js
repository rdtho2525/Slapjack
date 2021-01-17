//DOM elements
var playerOnePile = document.querySelector('#playerOne');
var playerTwoPile = document.querySelector('#playerTwo');
var centerPileNode = document.querySelector('#centerPile');

//Global Variables
var slapjack = new Game();
// var p1;
// var p2;


//Event listeners
document.addEventListener('keypress', playGame);

//Functions
function hide(element) {
  return element.classList.add('hidden');
}

function unhide(element) {
  return element.classList.remove('hidden');
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
}

function takePile(player, game) {
  for (var i = 0; i < game.centerPile.length; i++) {
    player.hand.push(game.centerPile[i]);
  }
}

function clearPile(game) {
    game.centerPile = []
}

function playGame(event) {
  var keyPressed = String.fromCharCode(event.keyCode);
  var p1 = slapjack.playerOne;
  var p2 = slapjack.playerTwo;
  if (keyPressed == 'q') {
    p1.playCard(slapjack)
    console.log(keyPressed)
    console.log('Player One dealt a card!')
  } else if (keyPressed == 'f') {
    p1.slapPile(slapjack)
    console.log(keyPressed)
    console.log('Player One slapped the pile!')
  } else if (keyPressed == 'p') {
    p2.playCard(slapjack)
    console.log(keyPressed)
    console.log('Player Two dealt a card!')
  } else if (keyPressed == 'j') {
    p2.slapPile(slapjack)
    console.log(keyPressed)
    console.log('Player Two slapped the pile!')
  } else {
    console.log(keyPressed)
    console.log('Keep trying!')
  }
  console.log(slapjack.centerPile)
}
