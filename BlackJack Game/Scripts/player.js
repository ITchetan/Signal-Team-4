 class Player {
  constructor () {
    this.name
    this.hand = []
    this.handCount = 0
    this.wins = 0
  }

  cardDraw (deck) {
    // draws a card from the deck and adds to hand and removes that same card from the decklist
    var randNum = Math.floor(Math.random() * (newDeck.decklist.length - 1)) + 1
    randNum = Number(randNum)
    var card = deck.decklist[randNum]
    this.hand.push(card)
    deck.decklist.splice(randNum, 1)
    if (this.handCount > 10 && card.cardValue ==11) {
      card.cardValue = 1
    }

    this.handCount += card.cardValue

    return card
    if (this.handCount > 21) {
      compareScore();
    }
  }

  // bustPlayer(){
  //   if (this.handCount >21) {
  //     return True;
  //   }
  // }

  displayCard (card) {
    // returns a string which is the location of the card image
    var cardImage = card.image
    // console.log(card.image)
    return String(cardImage)
  }

  displayReset () {
    // returns a string which is the location of the card image
    var cardImage = ""
    // console.log(card.image)
    return String(cardImage)
  }
}
