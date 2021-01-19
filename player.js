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
    if((this.turn || !checkHand(game[this.opponent])) && checkHand(this)) {
      this.turn = false;
      var cardPlayed = this.hand.splice(0, 1)[0];
      game.centerPile.unshift(cardPlayed);
      game[this.opponent].turn = true;
    } else {
      return
      // hide(game.centerPile, 'invisible');
    }
  }

  slapPile(game) {
    var validSlap;
    if (isJack() || isDouble() || isSandwich() || isWild()) {
      validSlap = true;
    } else {
      validSlap = false;
    }

    return validSlap
  }

  addWin() {
    this.win++
  }

  saveWinsToStorage() {
    addWin();
    var winstoStore = this.wins;
    var strWins = JSON.stringify(winstoStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
