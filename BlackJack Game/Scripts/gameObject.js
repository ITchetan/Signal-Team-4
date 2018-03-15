class GameObject {
  constructor () {
    var user = new Player()
    var computer = new Player()
    var newDeck = new Deck()

    // console.log(deck.decklist)
    user.cardDraw(newDeck, user)
    user.cardDraw(newDeck, user)

  }
 console.log(user.cardDraw(newDeck, user))
 var userSum = user.handCount()

 //console.log(userSum)
  // Methods


  compareCardValue () {// work in progress
    // compares the hand count of all players and return the winer
    // Work in progress Chetan
  }
  displayWinner() {// work in progress
    // displays the winning message work
  }
}
