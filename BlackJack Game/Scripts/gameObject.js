class GameObject {
  constructor () {
    var user = new Player()
    var computer = new Player()
    var newDeck = new Deck()

    // console.log(deck.decklist)
    this.cardDraw(newDeck, user)
  }

  // Methods


  compareHandCount() {
    //compares the hand count of all players and return the winer
  }

  displayWinner() {
    //displays the winning message
}