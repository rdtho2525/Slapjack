const centerPileNode = document.querySelector('#centerPile');
const actionNotifier = document.querySelector('#actionNotifier');
const dealCardsButton = document.querySelector('#dealCardsButton');
const buttonContainer = document.querySelector('#buttonContainer');

var slapjack = new Game();
var p1 = slapjack.playerOne;
var p2 = slapjack.playerTwo;

const hide = (element, rule) => element.classList.add(rule);

const unhide = (element, rule) => element.classList.remove(rule);

const hideNotification = () => setTimeout(() => hide(actionNotifier, 'invisible'), 5000);

const proveEmptyHand = player => {
  const emptyHand = document.querySelector(`#${player.id}`);
  !player.hasCards ? hide(emptyHand, 'invisible') : unhide(emptyHand, 'invisible');  
}

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

const dealCardsToPlayers = () => {
  slapjack.dealCards();
  hide(buttonContainer, 'hidden');
  unhide(centerPileNode, 'hidden');
  hide(centerPileNode, 'invisible');
  actionNotifier.innerText = 'Player 1, you\'re up!';
  hideNotification();
}

const displayTopCard = () => {
  if (slapjack.centerPile.length) {
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

window.addEventListener('load', displayWins);
document.addEventListener('keypress', playGame);
dealCardsButton.addEventListener('click', dealCardsToPlayers);