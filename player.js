class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.wins = getWins(this) || 0;
    this.hand = [];
    this.turn = false;
    this.opponent = checkOpponent(this);
    this.isWinner = false;
  }

  playCard(game) {
    if((this.turn || !checkHand(game[this.opponent])) && checkHand(this)) {
      this.turn = false;
      var cardPlayed = this.hand.splice(0, 1)[0];
      game.centerPile.unshift(cardPlayed);
      game[this.opponent].turn = true;
    } else {
      return
    }
  }

  validateSlap(game) {
    var validSlap;
    if (isJack()) {
      validSlap = true;
    } else if (checkHand(this) && checkHand(game[this.opponent]) && (isDouble() || isSandwich() || isWild())) {
      validSlap = true;
    } else {
      validSlap = false;
    }

    return validSlap
  }

  slapPile(game) {
    this.validateSlap(game);
    game.processSlap(this);
    if (this.validateSlap(game)) {
      clearPile(game);
      winGame(this, game[this.opponent]);
    }
  }

  addWin() {
    this.wins++
  }

  saveWinsToStorage() {
    this.addWin();
    var winsToStore = this.wins;
    var strWins = JSON.stringify(winsToStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
