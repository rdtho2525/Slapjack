//DOM elements
var playerOnePile = document.querySelector('#playerOne');
var playerTwoPile = document.querySelector('#playerTwo');
var centerPileNode = document.querySelector('#centerPile');

//Global Variables
var slapjack = new Game();


//Event listeners
  //when playerOne hits 'q', playCard
  //when playerOne hits 'f', slapPile

  //when playerTwo hits 'p', playCard
  //when playerTwo hits 'j', slapPile

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

function checkOpponent(player) {
  var opponent;
  if (player.id === 'playerOne') {
    opponent = 'playerTwo'
  } else {
    opponent = 'playerOne'
  }
  return opponent
}



function takePile(player, game) {
  for (var i = 0; i < game.centerPile.length; i++) {
    player.hand.push(game.centerPile[i])
  }
}

function clearPile(game) {
    game.centerPile = []
}

function findKey() {
  var keyFinder = event.which;
  var keyStroke = String.fromCharCode(keyFinder);
  return keyStroke
}

function playCardPlayerOne() {
  var p1 = slapjack.playerOne
  findKey()
  if (keyStroke() === 'q') {
      p1.playCard(slapjack);
      centerPileNode.innerHTML =
      `<image src="${slapjack.centerPile[0].image}" alt="${slapjack.centerPile[0].type} ${slapjack.centerPile[0].value}">`
  } else {
    return
  }
}
