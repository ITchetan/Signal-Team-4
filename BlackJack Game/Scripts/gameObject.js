class GameObject {
  constructor () {
    var user = new Player()
    var computer = new Player()
    var deck = new Deck()
    this.cardDraw(deck, user)
  }

  // Methods

  // This doesn't work yet, still trying to get it done - Bryce
  cardDraw (deck, target) {
    // draws a card from the deck and adds to hand
    var randNum = Math.floor(Math.random() * 51) + 1
    target.hand.push(deck.deckList[Number(randNum)])
    console.log(this.hand)
  }
}
