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
    var card = deck.decklist[randNum]
    this.hand.push(card)
    deck.decklist.splice(randNum, 1)
    console.log(card.image)

    // displayCard(card)
  }

  displayCard (card) {
    // Five empty boxes under each player on the screen
    // when a card is draw, the empty box closes to the left is changed to display
    // the card that was just drawn

    //find the box on the left which is empty
    //change it's display to the image fro each card
    var cardImage = card.image

    return cardImage




  }

}
