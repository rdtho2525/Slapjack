class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.turn = true;
    this.opponent = checkOpponent(this);
  }

  playCard(game) {
    // var opponent = checkOpponent(this)
    if(this.turn === true || game[this.opponent].hand.length === 0) {
      this.turn = false;
      var cardPlayed = this.hand.splice(0, 1)[0];
      game.centerPile.unshift(cardPlayed);
      game[this.opponent].turn = true;
    } else {
      console.log('Player cannot play twice unless opponent is out of cards!')
    }
  }

  slapPile(game) {
    var output;
    // var opponent = checkOpponent(this);
    if (isJack() || isDouble() || isSandwich()) {
      takePile(this, game)
      output = true;
    } else {
        var topCard = this.hand.shift();
        game[this.opponent].hand.push(topCard);
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
