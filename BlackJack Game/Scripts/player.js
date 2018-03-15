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
    // draws a card from the deck and adds to hand
    var randNum = Math.floor(Math.random() * 51) + 1
    this.hand.push(deck.deckList[randNum])
    console.log(this.hand)
  }

  cardDraw (deck) {
    // draws a card from the deck and adds to hand
    var randNum = Math.floor(Math.random() * 51) + 1
    randNum = Number(randNum)
    console.log(deck.decklist[randNum])
    // dog is just to temporarily store the values of the card. Could be called card but would
    // get confusing having a million variables called card
    var dog = deck.decklist[randNum]
    this.hand.push(dog)
  }


  }

}
