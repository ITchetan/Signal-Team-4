class Card {

  constructor (value, suit) {
    var suits = ['spades', 'clubs', 'diamonds', 'hearts']
    var values = ['1', '2', '3', '4', '5', '6', '7', '8', '8', '10', 'jack', 'queen', 'king']
    this.value = values[value]
    this.suit = suits[suit]
    this.image = '/Images/Cards/' + this.value + '_of_' + this.suit + '.png'

  }
}
