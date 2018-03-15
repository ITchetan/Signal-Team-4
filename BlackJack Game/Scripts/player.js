class Player {
  constructor (name) {
    this.name = name
    this.hand = []
    this.handCount = 0
    this.score = 0
  }

  // Methods
  handCountUpdate() {
   //Returns the sum of hand
  }

  cardDraw (deck) {
    // draws a card from the deck and adds to hand and removes that same card from the decklist
    var randNum = Math.floor(Math.random() * 51) + 1
    randNum = Number(randNum)
    // dog is just to temporarily store the values of the card. Could be called card but would
    // get confusing having a million variables called card
    var dog = deck.decklist[randNum]
    this.hand.push(dog)
    deck.decklist.splice(randNum, 1)
  }
}
