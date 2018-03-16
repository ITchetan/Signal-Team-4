class Player {
  constructor () {
    this.name = name
    this.hand = []
    this.handCount = 0
    this.score = 0
  }

  cardDraw (deck) {
    // draws a card from the deck and adds to hand and removes that same card from the decklist
    var randNum = Math.floor(Math.random() * (newDeck.decklist.length - 1)) + 1
    randNum = Number(randNum)
    var card = deck.decklist[randNum]
    this.hand.push(card)
    deck.decklist.splice(randNum, 1)
    this.handCount += card.cardValue
    return card
  }

  displayCard (card) {
    // returns a string which is the location of the card image
    var cardImage = card.image
    console.log(card.image)
    return String(cardImage)
  }
}
