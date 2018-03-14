class Deck {
  constructor () {
    this.decklist = []
    // Creates the deck of cards whenever a new deck object is created
    for (var suit = 0; suit <= 3; suit++) {
      for (var value = 0; value < 13; value++) {
        var card = new Card(value, suit)
        // console.log(card)
        this.decklist.push(card)
      }
    }
    // Display the deck in the console for testing purposes
    // console.log(this.cards)
  }

  // Methods

  cardRemove () {
    // removes a card from the deck, is called when a card is drawn
    var randNum = Math.floor(Math.random() * 51) + 1
    this.decklist.remove(randNum)
  }
}
