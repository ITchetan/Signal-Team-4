// **** DAILY MEETING 9.30am and 1.00pm
var user
var computer
var newDeck



function hitButton () {
  user.cardDraw(newDeck)
  user.handSum()
}

function dealButton () {
  user = new Player()
  computer = new Player()
  newDeck = new Deck()

  // console.log(deck.decklist)
  user.cardDraw(newDeck)
  user.cardDraw(newDeck)
  user.handSum()
  user.handCount
  //console.log(user.handCount)

}

function standButton () {
  computer.cardDraw(newDeck)
  computer.cardDraw(newDeck)
  computer.handSum()
  computer.handCount
  console.log(compareSore())

  // add compare score and winning screen
}

function compareScore()
{
  if (user.handCount > computer.handCount) {
    var winner = "You win!!"

  }
  if (user.handCount == computer.handCount) {
    var winner = "draw!!"

  } else {

    var winner = "Computer wins!!"

  }

  return winner
}

function myFuntion() {
    var x = document.getElementById("dealCards");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }
