class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.turn = true;
    this.opponent = checkOpponent(this);
    this.isWinner = false;
  }

  playCard(game) {
    if(this.hand.length > 0 && (this.turn || !game[this.opponent].hand.length) && checkDeck(this)) {
      this.turn = false;
      var cardPlayed = this.hand.splice(0, 1)[0];
      game.centerPile.unshift(cardPlayed);
      game[this.opponent].turn = true;
    } else {
      console.log('Invalid action! Player either has no cards or tried to play twice in a row.')
    }
  }

  slapPile(game) {
    var output;
    if (isJack() || isDouble() || isSandwich() || isWild()) {
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

    if (game.centerPile.length === 0 && !checkDeck(game[this.opponent])) {
      game.pronounceWinner(this)
      game.resetDeck()
      // console.log(`${this.id} wins!`)
    }
  }

  saveWinsToStorage() {
    var winstoStore = this.wins;
    var strWins = JSON.stringify(winstoStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
