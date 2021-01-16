class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    var cardPlayed = this.hand.splice(0, 1);
    return cardPlayed;
  }

  saveWinsToStorage() {
    var winstoStore = this.wins;
    var strWins = JSON.stringify(winstoStore);
    localStorage.setItem(`${this.id}Wins`, strWins);
  }
}
