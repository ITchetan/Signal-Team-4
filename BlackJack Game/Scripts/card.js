class Card {

<<<<<<< HEAD
  constructor (value, suit,cardValue) {
    var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
    var values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
    var cardValues = [11,2,3,4,5,6,7,8,9,10,10,10,10]
    this.value = values[value]
    this.suit = suits[suit]
    this.cardValue=cardValues[cardValue]
    //image;
=======
  constructor (value, suit) {
    var suits = ['spades', 'clubs', 'diamonds', 'hearts']
    var values = ['1', '2', '3', '4', '5', '6', '7', '8', '8', '10', 'jack', 'queen', 'king']
    this.value = values[value]
    this.suit = suits[suit]
    this.image = '/Images/Cards/' + this.value + '_of_' + this.suit + '.png'

>>>>>>> 5a239b0fa595b042b2de70387fd56e68abcff163
  }
}
