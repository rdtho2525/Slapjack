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
    
  }
}

module.exports = Player;
