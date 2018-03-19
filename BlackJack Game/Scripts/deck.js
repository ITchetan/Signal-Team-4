class Deck {
  constructor () {
    this.decklist = []
    // Creates the deck of cards whenever a new deck object is created
    for (var suit = 0; suit <= 3; suit++) {
      for (var value = 0; value < 13; value++) {
        var card = new Card(value, suit, value)
        this.decklist.push(card)
      }
    }
  }
}
