class Player {
  constructor (name) {
    this.name = name
    this.hand = []
    this.handCount = 0
    this.score = 0
  }

  // Methods// work in progress chetan
  carValueSum(this.hand) {
   //Returns the sum of cards in the players hand

   total = 0;
  for (var i = 0; i < this.hand.length; i++) {
    var card =this.hand[i]
    if (card.value == "One") {
        total +=1;
          }
    if (card.value == "two") {
        total +=2;
        }
    if (card.value == "Three") {
      total += 3;
          }
    if (card.value == "Four") {
        total += 4;
       }
    if (card.value == "Five") {
           total += 5;
          }
    if (card.value == "Six") {
          total += 6;
          }
    if (card.value == "Seven") {
         total += 7;
            }
    if (card.value == "Eight") {
            total += 8;
          }
    if (card.value == "Nine") {
            total += 9;
                }
    if (card.vlue == "Ten") {
      total+=10
    }

    if (card.vlue == "Jack") {
      total+=10
    }
    if (card.vlue == "Queen") {
      total+=10
    }
    if (card.vlue == "King") {
      total+=10
    }
  }
  return total;
  console.log(total);
}
//     //console.log(total);




  cardDraw (deck) {
    // draws a card from the deck and adds to hand and removes that same card from the decklist
    var randNum = Math.floor(Math.random() * 51) + 1
    randNum = Number(randNum)
    // dog is just to temporarily store the values of the card. Could be called card but would
    // get confusing having a million variables called card
    var card = deck.decklist[randNum]
    this.hand.push(card)
    deck.decklist.splice(randNum, 1)
    console.log(this.hand)
  }
}
