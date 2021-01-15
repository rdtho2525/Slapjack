class Game {
  constructor() {
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.deck = [
    './card-deck-assets/blue-01.png',
    './card-deck-assets/blue-02.png',
    './card-deck-assets/blue-03.png',
    './card-deck-assets/blue-04.png',
    './card-deck-assets/blue-05.png',
    './card-deck-assets/blue-06.png',
    './card-deck-assets/blue-07.png',
    './card-deck-assets/blue-08.png',
    './card-deck-assets/blue-09.png',
    './card-deck-assets/blue-10.png',
    './card-deck-assets/blue-jack.png',
    './card-deck-assets/blue-queen.png',
    './card-deck-assets/blue-king.png',
    './card-deck-assets/gold-01.png',
    './card-deck-assets/gold-02.png',
    './card-deck-assets/gold-03.png',
    './card-deck-assets/gold-04.png',
    './card-deck-assets/gold-05.png',
    './card-deck-assets/gold-06.png',
    './card-deck-assets/gold-07.png',
    './card-deck-assets/gold-08.png',
    './card-deck-assets/gold-09.png',
    './card-deck-assets/gold-10.png',
    './card-deck-assets/gold-jack.png',
    './card-deck-assets/gold-queen.png',
    './card-deck-assets/gold-king.png',
    './card-deck-assets/green-01.png',
    './card-deck-assets/green-02.png',
    './card-deck-assets/green-03.png',
    './card-deck-assets/green-04.png',
    './card-deck-assets/green-05.png',
    './card-deck-assets/green-06.png',
    './card-deck-assets/green-07.png',
    './card-deck-assets/green-08.png',
    './card-deck-assets/green-09.png',
    './card-deck-assets/green-10.png',
    './card-deck-assets/green-jack.png',
    './card-deck-assets/green-queen.png',
    './card-deck-assets/green-king.png',
    './card-deck-assets/green-01.png',
    './card-deck-assets/red-01.png',
    './card-deck-assets/red-02.png',
    './card-deck-assets/red-03.png',
    './card-deck-assets/red-04.png',
    './card-deck-assets/red-05.png',
    './card-deck-assets/red-06.png',
    './card-deck-assets/red-07.png',
    './card-deck-assets/red-08.png',
    './card-deck-assets/red-09.png',
    './card-deck-assets/red-10.png',
    './card-deck-assets/red-jack.png',
    './card-deck-assets/red-queen.png',
    './card-deck-assets/red-king.png',
    './card-deck-assets/red-01.png',
    'wild.png'
    ];
    this.centerPile = []
  };

  shuffleDeck(array) {
    var randomNum;
    var shuffler;
    for (i = array.length - 1; i > 0; i--) {
      randomNum = Math.floor(Math.random() * (i + 1));
      shuffler = array[i];
      array[i] = array[randomNum];
      array[randomNum] = shuffler;
    }
    return array;
  }

  dealCards(deck, handOne, handTwo) {
    var playerOne = new Player()
    var playerTwo = new Player()
    var newDeck = shuffle(deck);
    for (i = newDeck.length-1; i >= 0; i--) {
      if (i % 2 === 0) {
        handOne.push(newDeck[i])
      } else {
        handTwo.push(newDeck[i])
      }
    }
    return [handOne, handTwo];
  }

  slapPile() {

  }

  pronounceWinner(player) {
    player.wins++
  }

  resetDeck() {

  }
}
