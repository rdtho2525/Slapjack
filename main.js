const centerPileNode = document.querySelector('#centerPile');
const actionNotifier = document.querySelector('#actionNotifier');
const dealCardsButton = document.querySelector('#dealCardsButton');
const buttonContainer = document.querySelector('#buttonContainer');

var slapjack = new Game();
var p1 = slapjack.playerOne;
var p2 = slapjack.playerTwo;

// function hide(element, rule) {
//   return element.classList.add(rule);
// }

const hide = (element, rule) => element.classList.add(rule);

// function unhide(element, rule) {
//   return element.classList.remove(rule);
// }

const unhide = (element, rule) => element.classList.remove(rule);

// function hideNotification() {
//   return setTimeout(function() { hide(actionNotifier, 'invisible') }, 5000)
// }

const hideNotification = () => setTimeout(() => hide(actionNotifier, 'invisible'), 5000);

// function isJack() {
//   var topCard = slapjack.centerPile[0].value;
//   if (topCard === 'jack') {
//     return true
//   } else {
//     return false
//   }
// }

// const isJack = () => {
//   const topCard = slapjack.centerPile[0].value;
//   if (topCard === 'jack') {
//     return true
//   } else {
//     return false
//   }
// }

// function isDouble() {
//   var topCard = slapjack.centerPile[0].value;
//   var secondCard = slapjack.centerPile[1].value;
//   if (slapjack.centerPile.length > 1 && topCard === secondCard) {
//     return true
//   } else {
//     return false
//   }
// }

// const isDouble = () => {
//   const topCard = slapjack.centerPile[0].value;
//   const secondCard = slapjack.centerPile[1].value;
//   if (slapjack.centerPile.length > 1 && topCard === secondCard) {
//     return true
//   } else {
//     return false
//   }
// }

// function isSandwich() {
//   var topCard = slapjack.centerPile[0].value;
//   var thirdCard = slapjack.centerPile[2].value;
//   if (slapjack.centerPile.length > 2 && topCard === thirdCard) {
//     return true
//   } else {
//     return false
//   }
// }

// const isSandwich = () => {
//   const topCard = slapjack.centerPile[0].value;
//   const thirdCard = slapjack.centerPile[2].value;
//   if (slapjack.centerPile.length > 2 && topCard === thirdCard) {
//     return true
//   } else {
//     return false
//   }
// }

// function isWild() {
//   for (var i = 0; i < 3; i++) {
//     if (slapjack.centerPile[i].value === 'wild') {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// const isWild = () => {
//   for (let i = 0; i < 3; i++) {
//     if (slapjack.centerPile[i].value === 'wild') {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// function checkHand(player) {
//   var hasCards;
//   if(player.hand.length) {
//     hasCards = true
//   } else {
//     hasCards = false
//   }

//   return hasCards
// }

// const checkHand = player => {
//   let hasCards;
//   if(player.hand.length) {
//     hasCards = true
//   } else {
//     hasCards = false
//   }

//   return hasCards
// }

// function proveEmptyHand(player) {
//   var emptyHand = document.querySelector(`#${player.id}`);
//   if (!checkHand(player)) {
//     hide(emptyHand, 'invisible');
//   } else {
//     unhide(emptyHand, 'invisible');
//   }
// }

const proveEmptyHand = player => {
  const emptyHand = document.querySelector(`#${player.id}`);
  return !player.hasCards ? hide(emptyHand, 'invisible') : unhide(emptyHand, 'invisible');
}

// function checkAction() {
//   var action;
//   if (!slapjack.centerPile.length) {
//     return
//   } else if (isJack()) {
//     action = 'slapjack'
//   } else if (!checkHand(p1) || !checkHand(p2)) {
//     action = 'uh oh'
//   } else if (isWild()) {
//     action = 'wild card'
//   } else if (isDouble()) {
//     action = 'double'
//   } else if (isSandwich()) {
//     action = 'sandwich'
//   } else {
//     action = 'bad slap'
//   }

//   return action
// }

const checkAction = () => {
  let action;
  if (!slapjack.centerPile) {
    return
  } else if (slapjack.isJack()) {
    action = 'slapjack'
  } else if (!p1.hasCards || !p2.hasCards) {
    action = 'uh oh'
  } else if (slapjack.isWild()) {
    action = 'wild card'
  } else if (slapjack.isDouble()) {
    action = 'double'
  } else if (slapjack.isSandwich()) {
    action = 'sandwich'
  } else {
    action = 'bad slap'
  }

  return action
}

// function checkResult(string, player, opponent) {
//   var result;
//   if (string !== 'uh oh' && string !== 'bad slap' && checkHand(opponent)) {
//     result = 'takes the pile'
//   } else if (string === 'bad slap') {
//     result = `forfeits a card to ${opponent.name}`
//   } else if (!isJack() && !checkHand(opponent)) {
//     result = 'can only win on SlapJack - keep playing'
//   } else if (!checkHand(player)) {
//     result = `doesn't have a card to give. ${opponent.name} wins`
//     clearPile(slapjack);
//     winGame(opponent, player);
//   } else {
//     result = 'wins'
//   }

//   return result
// }

const checkResult = (string, player, opponent) => {
  let result;
  if (string !== 'uh oh' && string !== 'bad slap' && opponent.hasCards) {
    result = 'takes the pile'
  } else if (string === 'bad slap') {
    result = `forfeits a card to ${opponent.name}`
  } else if (!slapjack.isJack() && !opponent.hasCards) {
    result = 'can only win on SlapJack - keep playing'
  } else if (!player.hasCards) {
    result = `doesn't have a card to give. ${opponent.name} wins`
    slapjack.clearPile();
    winGame(opponent, player);
  } else {
    result = 'wins'
  }

  return result
}

// function clearPile(game) {
//     game.centerPile = [];
// }

// const clearPile = game => game.centerPile = [];

// function takePile(player, game) {
//   for (var i = 0; i < game.centerPile.length; i++) {
//     player.hand.push(game.centerPile[i]);
//   }
// }

// const takePile = (player, game) => {
//   for (var i = 0; i < game.centerPile.length; i++) {
//     player.hand.push(game.centerPile[i]);
//   }
// }

// function forfeitCard(player, opponent) {
//   var topCard = player.hand.shift();
//   opponent.hand.push(topCard);
// }

// const forfeitCard = (player, opponent) => {
//   let topCard = player.hand.shift();
//   opponent.hand.push(topCard);
// }

// function dealCardsToPlayers() {
//   slapjack.dealCards();
//   hide(buttonContainer, 'hidden');
//   unhide(centerPileNode, 'hidden');
//   hide(centerPileNode, 'invisible');
//   actionNotifier.innerText = 'Player 1, you\'re up!';
//   hideNotification();
// }

const dealCardsToPlayers = () => {
  slapjack.dealCards();
  hide(buttonContainer, 'hidden');
  unhide(centerPileNode, 'hidden');
  hide(centerPileNode, 'invisible');
  actionNotifier.innerText = 'Player 1, you\'re up!';
  hideNotification();
}

const displayTopCard = () => {
  if (slapjack.centerPile) {
    const topCardImage = slapjack.centerPile[0].image;
    const topCardType = slapjack.centerPile[0].type;
    const topCardValue = slapjack.centerPile[0].value;
    unhide(centerPileNode, 'invisible');
    centerPileNode.innerHTML =
      `<img id="topCard" src=${topCardImage} alt="${topCardType} ${topCardValue}">`
  } else {
    hide(centerPileNode, 'invisible');
  }
}


// function playGame(event) {
//   var keyPressed = String.fromCharCode(event.keyCode);
//   if (keyPressed == 'q') {
//     p1.playCard(slapjack);
//     centerPileNode.classList.remove('two')
//   } else if (keyPressed == 'f') {
//     actionNotifier.innerText = slapjack.compileMessage(p1);
//     p1.slapPile(slapjack);
//     unhide(actionNotifier, 'invisible');
//     hideNotification();
//   } else if (keyPressed == 'p') {
//     p2.playCard(slapjack);
//     centerPileNode.classList.add('two');
//   } else if (keyPressed == 'j') {
//     actionNotifier.innerText = slapjack.compileMessage(p2);
//     p2.slapPile(slapjack);
//     unhide(actionNotifier, 'invisible');
//     hideNotification();
//   } else {
//     return
//   }

//   displayTopCard();
//   proveEmptyHand(p1);
//   proveEmptyHand(p2);
// }

const playGame = event => {
  let keyPressed = event.key;
  switch (keyPressed) {
    case 'q':
    p1.playCard(slapjack);
    centerPileNode.classList.remove('two')
    break;
    case 'f':
      actionNotifier.innerText = slapjack.compileMessage(p1);
      p1.slapPile(slapjack);
      unhide(actionNotifier, 'invisible');
      hideNotification();
      break;
    case 'p':
      console.log(keyPressed)
      console.log(p2.hand[0])
      p2.playCard(slapjack);
      centerPileNode.classList.add('two');
      break;
    case 'j':
      actionNotifier.innerText = slapjack.compileMessage(p2);
      p2.slapPile(slapjack);
      unhide(actionNotifier, 'invisible');
      hideNotification();
      break;
    default: break;
  }

  // if (keyPressed == 'q') {
  //   p1.playCard(slapjack);
  //   centerPileNode.classList.remove('two')
  // } else if (keyPressed == 'f') {
  //   actionNotifier.innerText = slapjack.compileMessage(p1);
  //   p1.slapPile(slapjack);
  //   unhide(actionNotifier, 'invisible');
  //   hideNotification();
  // } else if (keyPressed == 'p') {
  //   p2.playCard(slapjack);
  //   centerPileNode.classList.add('two');
  // } else if (keyPressed == 'j') {
  //   actionNotifier.innerText = slapjack.compileMessage(p2);
  //   p2.slapPile(slapjack);
  //   unhide(actionNotifier, 'invisible');
  //   hideNotification();
  // } else {
  //   return
  // }

  displayTopCard();
  proveEmptyHand(p1);
  proveEmptyHand(p2);
}

const displayWins = () => {
  let players = [p1, p2];
  players.forEach(player => {
    let winsToDisplay = player.wins;
    let grammar = winsToDisplay === 1 ? 'Win' : 'Wins';
    player.isWinner ? setTimeout(function() { slapjack.resetGame() }, 4000) : null;
    document.querySelector(`#${player.id}Wins`).innerText = `${winsToDisplay} ${grammar}`  
  })
}

const winGame = (player, opponent) => {
  if (!slapjack.centerPile.length && !opponent.hasCards) {
    player.isWinner = true;
    player.saveWinsToStorage();
    displayWins();
  }
}

// function displayTopCard() {
//   if (slapjack.centerPile.length) {
//     var topCardImage = slapjack.centerPile[0].image;
//     var topCardType = slapjack.centerPile[0].type;
//     var topCardValue = slapjack.centerPile[0].value;
//     unhide(centerPileNode, 'invisible');
//     centerPileNode.innerHTML =
//       `<img id="topCard" src=${topCardImage} alt="${topCardType} ${topCardValue}">`
//   } else {
//     hide(centerPileNode, 'invisible');
//   }
// }


// function winGame(player, opponent) {
//   if (!slapjack.centerPile.length && !checkHand(opponent)) {
//     player.isWinner = true;
//     player.saveWinsToStorage();
//     displayWins(player);
//   }
// }


// function getWins(player) {
//   var localWins = localStorage.getItem(`${player.id}Wins`);
//   var parsedWins = JSON.parse(localWins);
//   return parsedWins
// }

// const getWins = player => {
//   let localWins = localStorage.getItem(`${player.id}Wins`);
//   let parsedWins = JSON.parse(localWins);
//   return parsedWins
// }

// function displayWins(player) {
//   var grammar;
//   var winsToDisplay = player.wins;
//   if (player.isWinner) {
//     setTimeout(function() { slapjack.resetGame() }, 4000);
//   }

//   if (winsToDisplay === 1) {
//     grammar = 'Win'
//   } else {
//     grammar = 'Wins'
//   }

//   document.querySelector(`#${player.id}Wins`).innerText = `${winsToDisplay} ${grammar}`
// }

window.addEventListener('load', displayWins);
document.addEventListener('keypress', playGame);
dealCardsButton.addEventListener('click', dealCardsToPlayers);