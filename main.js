//DOM elements

//Global Variables
var slapjack = new Game();

//Event listeners

//Functions
function hide(element) {
  return element.classList.add('hidden');
}

function unhide(element) {
  return element.classList.remove('hidden');
}

function isJack() {
  if (slapjack.centerPile[0].value === 'jack') {
    // console.log('Jack?:', slapjack.centerPile[0].value)
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

function checkSlapper(player) {
  var nonSlapper;
  if (player.id === 'playerOne') {
    nonSlapper = 'playerTwo';
  } else {
    nonSlapper = 'playerOne';
  }
  return nonSlapper
}

function takePile(player, game) {
  for (var i = 0; i < game.centerPile.length; i++) {
    player.hand.push(game.centerPile[i])
  }
}

function clearPile(game) {
    game.centerPile = []
}
