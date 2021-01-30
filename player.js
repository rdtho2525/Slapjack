class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.wins = this.getWins() || 0;
    this.hand = [];
    this.hasCards = true;
    this.turn = false;
    this.opponent = this.id === 'playerOne' ? 'playerTwo' : 'playerOne';
    this.isWinner = false;
  }

  playCard(game) {
    this.hand.length > 0 ? this.hasCards = true : this.hasCards = false;
    if((this.turn || !game[this.opponent].hasCards) && this.hasCards) {
      this.turn = false;
      const cardPlayed = this.hand.splice(0, 1)[0];
      game.centerPile.unshift(cardPlayed);
      game[this.opponent].turn = true;
    } else {
      return
    }
  }

  slapPile(game) {
    game.validateSlap(this);
    game.processSlap(this);
    if (game.validateSlap(this)) {
      game.clearPile();
      winGame(this, game[this.opponent]);
    }
  }

  takePile(game) {
    for (let i = 0; i < game.centerPile.length; i++) {
      this.hand.push(game.centerPile[i]);
    }
  }

  forfeitCard(game) {
    let topCard = this.hand.shift();
    console.log(topCard)
    game[this.opponent].hand.push(topCard);
  }

  addWin() {
    this.wins++
  }

  getWins() {
    const localWins = localStorage.getItem(`${this.id}Wins`);
    const parsedWins = JSON.parse(localWins);
    return parsedWins
  }

  saveWinsToStorage() {
    this.addWin();
    const winsToStore = this.wins;
    const strWins = JSON.stringify(winsToStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
