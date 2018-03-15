class Card {

  constructor (value, suit, cardValue) {
    var suits = ['spades', 'clubs', 'diamonds', 'hearts']
    var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '8', '10', 'jack', 'queen', 'king']
    var cardValues = [11,2,3,4,5,6,7,8,9,10,10,10,10]
    this.value = values[value]
    this.suit = suits[suit]
    this.image = 'Images/Cards/' + this.value + '_of_' + this.suit + '.svg'
    this.cardValue=cardValues[cardValue]

  }
}
