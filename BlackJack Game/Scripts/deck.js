class Deck {
  constructor () {
    this.deckList = []

  }

  //Methods
  createDeck() {
    //creates the deck from scratch
    this.deckList = []
    var suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
    for (suit in suits) {
        for (id = 1; id <=13; id++){
            if (id > 10){
              value = 10
            }
            else {
              value = id
            }
            this.decklist.push(new card(id, value, suit))

        }

    }
    console.log(this.decklist)
}


  }

  cardRemove() {
    //removes a card from the deck, is called when a card is drawn
  }



}
