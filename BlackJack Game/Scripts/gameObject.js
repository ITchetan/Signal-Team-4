class GameObject {
  constructor () {
    var user = new Player()
    var computer = new Player()
    var newDeck = new Deck()

    // console.log(deck.decklist)
    this.cardDraw(newDeck, user)
  }

  // Methods

  cardDraw (deck, target) {
    // draws a card from the deck and adds to hand
    var randNum = Math.floor(Math.random() * 51) + 1
    randNum = Number(randNum)
    console.log(deck.decklist[randNum])
    var dog = deck.decklist[randNum]
    target.hand.push(dog)
  }
}
