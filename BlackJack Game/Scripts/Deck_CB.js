class Deck {
  constructor () {
    this.cards = []
    // deck to be constucted in the constuctor intialised when the deck object created
    for (var suit = 0; i <=3; suit++) {
      for (var value = 0; value < = 13; value++) {
      this.cards.push(new Card(value,suit))
      }
    }
  }
  }
