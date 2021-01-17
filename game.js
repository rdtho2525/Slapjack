class Game {
  constructor() {
    this.playerOne = new Player('playerOne');
    this.playerTwo = new Player('playerTwo');
    this.deck = [
    {type: 'blue', value: 1, image: './card-deck-assets/blue-01.png'},
    {type: 'blue', value: 2, image: './card-deck-assets/blue-02.png'},
    {type: 'blue', value: 3, image: './card-deck-assets/blue-03.png'},
    {type: 'blue', value: 4, image: './card-deck-assets/blue-04.png'},
    {type: 'blue', value: 5, image: './card-deck-assets/blue-05.png'},
    {type: 'blue', value: 6, image: './card-deck-assets/blue-06.png'},
    {type: 'blue', value: 7, image: './card-deck-assets/blue-07.png'},
    {type: 'blue', value: 8, image: './card-deck-assets/blue-08.png'},
    {type: 'blue', value: 9, image: './card-deck-assets/blue-09.png'},
    {type: 'blue', value: 10, image: './card-deck-assets/blue-10.png'},
    {type: 'blue', value: 'jack', image: './card-deck-assets/blue-jack.png'},
    {type: 'blue', value: 'queen', image: './card-deck-assets/blue-queen.png'},
    {type: 'blue', value: 'king', image: './card-deck-assets/blue-king.png'},
    {type: 'gold', value: 1, image: './card-deck-assets/gold-01.png'},
    {type: 'gold', value: 2, image: './card-deck-assets/gold-02.png'},
    {type: 'gold', value: 3, image: './card-deck-assets/gold-03.png'},
    {type: 'gold', value: 4, image: './card-deck-assets/gold-04.png'},
    {type: 'gold', value: 5, image: './card-deck-assets/gold-05.png'},
    {type: 'gold', value: 6, image: './card-deck-assets/gold-06.png'},
    {type: 'gold', value: 7, image: './card-deck-assets/gold-07.png'},
    {type: 'gold', value: 8, image: './card-deck-assets/gold-08.png'},
    {type: 'gold', value: 9, image: './card-deck-assets/gold-09.png'},
    {type: 'gold', value: 10, image: './card-deck-assets/gold-10.png'},
    {type: 'gold', value: 'jack', image: './card-deck-assets/gold-jack.png'},
    {type: 'gold', value: 'queen', image: './card-deck-assets/gold-queen.png'},
    {type: 'gold', value: 'king', image: './card-deck-assets/gold-king.png'},
    {type: 'green', value: 1, image: './card-deck-assets/green-01.png'},
    {type: 'green', value: 2, image: './card-deck-assets/green-02.png'},
    {type: 'green', value: 3, image: './card-deck-assets/green-03.png'},
    {type: 'green', value: 4, image: './card-deck-assets/green-04.png'},
    {type: 'green', value: 5, image: './card-deck-assets/green-05.png'},
    {type: 'green', value: 6, image: './card-deck-assets/green-06.png'},
    {type: 'green', value: 7, image: './card-deck-assets/green-07.png'},
    {type: 'green', value: 8, image: './card-deck-assets/green-08.png'},
    {type: 'green', value: 9, image: './card-deck-assets/green-09.png'},
    {type: 'green', value: 10, image: './card-deck-assets/green-10.png'},
    {type: 'green', value: 'jack', image: './card-deck-assets/green-jack.png'},
    {type: 'green', value: 'queen', image: './card-deck-assets/green-queen.png'},
    {type: 'green', value: 'king', image: './card-deck-assets/green-king.png'},
    {type: 'red', value: 1, image: './card-deck-assets/red-01.png'},
    {type: 'red', value: 2, image: './card-deck-assets/red-02.png'},
    {type: 'red', value: 3, image: './card-deck-assets/red-03.png'},
    {type: 'red', value: 4, image: './card-deck-assets/red-04.png'},
    {type: 'red', value: 5, image: './card-deck-assets/red-05.png'},
    {type: 'red', value: 6, image: './card-deck-assets/red-06.png'},
    {type: 'red', value: 7, image: './card-deck-assets/red-07.png'},
    {type: 'red', value: 8, image: './card-deck-assets/red-08.png'},
    {type: 'red', value: 9, image: './card-deck-assets/red-09.png'},
    {type: 'red', value: 10, image: './card-deck-assets/red-10.png'},
    {type: 'red', value: 'jack', image: './card-deck-assets/red-jack.png'},
    {type: 'red', value: 'queen', image: './card-deck-assets/red-queen.png'},
    {type: 'red', value: 'king', image: './card-deck-assets/red-king.png'},
    {type: 'wild', value: 'wild', image: './card-deck-assets/wild.png'}
    ];
    this.centerPile = [];
  };

  shuffleDeck(array) {
    var randomNum;
    var shuffler;
    for (var i = array.length - 1; i > 0; i--) {
      randomNum = Math.floor(Math.random() * (i + 1));
      shuffler = array[i];
      array[i] = array[randomNum];
      array[randomNum] = shuffler;
    }
    return array;
  }

  dealCards() {
    var newDeck = this.shuffleDeck(this.deck);
    for (var i = newDeck.length-1; i >= 0; i--) {
      if (i % 2 === 0) {
        this.playerOne.hand.push(newDeck[i])
        newDeck.splice(newDeck.indexOf(newDeck[i]), 1)
      } else {
        this.playerTwo.hand.push(newDeck[i])
        newDeck.splice(newDeck.indexOf(newDeck[i]), 1)
      }
    }
  }

  pronounceWinner(player) {
    player.wins++
  }

  resetDeck() {
    this.deck = [
    {type: 'blue', value: 1, image: './card-deck-assets/blue-01.png'},
    {type: 'blue', value: 2, image: './card-deck-assets/blue-02.png'},
    {type: 'blue', value: 3, image: './card-deck-assets/blue-03.png'},
    {type: 'blue', value: 4, image: './card-deck-assets/blue-04.png'},
    {type: 'blue', value: 5, image: './card-deck-assets/blue-05.png'},
    {type: 'blue', value: 6, image: './card-deck-assets/blue-06.png'},
    {type: 'blue', value: 7, image: './card-deck-assets/blue-07.png'},
    {type: 'blue', value: 8, image: './card-deck-assets/blue-08.png'},
    {type: 'blue', value: 9, image: './card-deck-assets/blue-09.png'},
    {type: 'blue', value: 10, image: './card-deck-assets/blue-10.png'},
    {type: 'blue', value: 'jack', image: './card-deck-assets/blue-jack.png'},
    {type: 'blue', value: 'queen', image: './card-deck-assets/blue-queen.png'},
    {type: 'blue', value: 'king', image: './card-deck-assets/blue-king.png'},
    {type: 'gold', value: 1, image: './card-deck-assets/gold-01.png'},
    {type: 'gold', value: 2, image: './card-deck-assets/gold-02.png'},
    {type: 'gold', value: 3, image: './card-deck-assets/gold-03.png'},
    {type: 'gold', value: 4, image: './card-deck-assets/gold-04.png'},
    {type: 'gold', value: 5, image: './card-deck-assets/gold-05.png'},
    {type: 'gold', value: 6, image: './card-deck-assets/gold-06.png'},
    {type: 'gold', value: 7, image: './card-deck-assets/gold-07.png'},
    {type: 'gold', value: 8, image: './card-deck-assets/gold-08.png'},
    {type: 'gold', value: 9, image: './card-deck-assets/gold-09.png'},
    {type: 'gold', value: 10, image: './card-deck-assets/gold-10.png'},
    {type: 'gold', value: 'jack', image: './card-deck-assets/gold-jack.png'},
    {type: 'gold', value: 'queen', image: './card-deck-assets/gold-queen.png'},
    {type: 'gold', value: 'king', image: './card-deck-assets/gold-king.png'},
    {type: 'green', value: 1, image: './card-deck-assets/green-01.png'},
    {type: 'green', value: 2, image: './card-deck-assets/green-02.png'},
    {type: 'green', value: 3, image: './card-deck-assets/green-03.png'},
    {type: 'green', value: 4, image: './card-deck-assets/green-04.png'},
    {type: 'green', value: 5, image: './card-deck-assets/green-05.png'},
    {type: 'green', value: 6, image: './card-deck-assets/green-06.png'},
    {type: 'green', value: 7, image: './card-deck-assets/green-07.png'},
    {type: 'green', value: 8, image: './card-deck-assets/green-08.png'},
    {type: 'green', value: 9, image: './card-deck-assets/green-09.png'},
    {type: 'green', value: 10, image: './card-deck-assets/green-10.png'},
    {type: 'green', value: 'jack', image: './card-deck-assets/green-jack.png'},
    {type: 'green', value: 'queen', image: './card-deck-assets/green-queen.png'},
    {type: 'green', value: 'king', image: './card-deck-assets/green-king.png'},    './card-deck-assets/green-01.png',
    {type: 'red', value: 1, image: './card-deck-assets/red-01.png'},
    {type: 'red', value: 2, image: './card-deck-assets/red-02.png'},
    {type: 'red', value: 3, image: './card-deck-assets/red-03.png'},
    {type: 'red', value: 4, image: './card-deck-assets/red-04.png'},
    {type: 'red', value: 5, image: './card-deck-assets/red-05.png'},
    {type: 'red', value: 6, image: './card-deck-assets/red-06.png'},
    {type: 'red', value: 7, image: './card-deck-assets/red-07.png'},
    {type: 'red', value: 8, image: './card-deck-assets/red-08.png'},
    {type: 'red', value: 9, image: './card-deck-assets/red-09.png'},
    {type: 'red', value: 10, image: './card-deck-assets/red-10.png'},
    {type: 'red', value: 'jack', image: './card-deck-assets/red-jack.png'},
    {type: 'red', value: 'queen', image: './card-deck-assets/red-queen.png'},
    {type: 'red', value: 'king', image: './card-deck-assets/red-king.png'},
    {type: 'none', value: 'wild', image: 'wild.png'}
    ];
    clearPile(this);
  }
}
