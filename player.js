class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard(game) {
    var cardPlayed = this.hand.splice(0, 1)[0];
    game.centerPile.unshift(cardPlayed);
  }

  slapPile(game) {
    var output;
    var nonSlapper = checkSlapper(this);
    if (isJack() || isDouble() || isSandwich()) {
      console.log('valid slap')
      console.log('Jack?', isJack())
      console.log('Double?', isDouble())
      console.log('Sandwich?', isSandwich());
      takePile(this, game)
      output = true;
    } else {
        console.log('invalid slap')
        var topCard = this.hand.shift();
        game[nonSlapper].hand.push(topCard);
        output = false;
    }

    if (output === true) {
      clearPile(game)
      game.shuffleDeck(this.hand)
    }
  }

  saveWinsToStorage() {
    var winstoStore = this.wins;
    var strWins = JSON.stringify(winstoStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
