class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }

  playCard(player) {
    var cardPlayed = player.hand.splice(0, 1);
    this.centerPile.push(cardPlayed);
  }

  saveWinsToStorage() {
    var winsToStore = this.wins;
    var strWins = JSON.stringify(winsToStore);
    localStorage.setItem(`${this}Wins`, strWins);
  }
}

module.exports = Player;
