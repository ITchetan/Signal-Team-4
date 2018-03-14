class Player {
  constructor (name) {
    this.name = name;
    this.hand = [];
    this.handCount = 0;
    this.score = 0;
  }

  // Methods
  handCountUpdate() {
   //Returns the sum of hand
  }

  cardDraw() {
    //draws a card from the deck and adds to hand
    // this is probably not the best way of doing this
    randNum = Math.floor(Math.random()*51)+1;
    this.hand.push(deck.deckList[randNum])
    
  }

  compareHandCount() {
    //compares the hand count of all players and return the winer
  }

  displayWinner() {
    //displays the winning message

  }

}
