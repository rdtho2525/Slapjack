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
    return true
  }
}

function isDouble() {
  if (slapjack.centerPile[0].value === slapjack.centerPile[1].value) {
    return true
  }
}

function isSandwich() {
  if (slapjack.centerPile[0].value === slapjack.centerPile[2].value) {
    return true
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
