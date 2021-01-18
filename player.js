class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.wins = getWins(this) || 0;
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
      hide(game.centerPile, 'invisible')
      action = 
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
  }

  saveWinsToStorage() {
    this.wins++
    var winsToStore = this.wins;
    var strWins = JSON.stringify(winsToStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
