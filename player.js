class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard(game) {
    var cardPlayed = this.hand.splice(0, 1);
    game.centerPile.shift(cardPlayed);
  }

  slapPile(game) {
    var nonSlapper = checkSlapper(this);
    if (!(isJack() || isDouble() || isSandwich())) {
      var topCard = this.hand.shift();
      game[nonSlapper].hand.push(topCard);
    } else {
      for (var i = 0; i < game.centerPile.length; i++) {
        this.hand.push(game.centerPile[i])
        game.shuffleDeck(this.hand)
      }
    }
  }

  saveWinsToStorage() {
    var winstoStore = this.wins;
    var strWins = JSON.stringify(winstoStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
