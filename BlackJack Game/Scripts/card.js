class Card {

  constructor (value, suit,cardValue) {
    var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
    var values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
    var cardValues = [11,2,3,4,5,6,7,8,9,10,10,10,10]
    this.value = values[value]
    this.suit = suits[suit]
    this.cardValue=cardValues[cardValue]
    //image;
  }
}
