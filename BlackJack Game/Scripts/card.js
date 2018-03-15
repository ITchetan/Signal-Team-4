class Card {

  constructor (value, suit) {
    var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
    var values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
    this.value = values[value]
    this.suit = suits[suit]
    //image;
  }
}
