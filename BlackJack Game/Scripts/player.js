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

  compareHandCount() {
    //compares the hand count of all players and return the winer
  }

  displayWinner() {
    //displays the winning message

  }

}
