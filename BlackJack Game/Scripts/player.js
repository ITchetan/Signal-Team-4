class Player {
  constructor () {
    //this.name = name
    this.hand = []
    this.handCount = 0
    this.score = 0
  }

  cardDraw (deck) {
    // draws a card from the deck and adds to hand and removes that same card from the decklist
    var randNum = Math.floor(Math.random() * 51) + 1
    randNum = Number(randNum)
    // dog is just to temporarily store the values of the card. Could be called card but would
    // get confusing having a million variables called card
    var card = deck.decklist[randNum]
    this.hand.push(card)
    deck.decklist.splice(randNum, 1)
    console.log(this.hand)
    for (var i in this.hand) {
            this.handCount += this.hand[i].cardValue
    }
    console.log(this.handCount)
    //sumCardValue(this.hand)
    //   Methods// work in progress chetan
    //   sumCardValue() {
    // // Returns the sum of cards in the players hand
    //   for (var i in this.hand) {
    //           this.handCount += this.hand[i.cardValue]
    //     }
    //     console.log(handCount)
      }

  }
    //console.log(total);
