var user
var computer
var newDeck
var imageCounter = 5;
//var winner

function hitButton () {
  var card = user.cardDraw(newDeck)
  document.getElementById('image' + imageCounter).src = user.displayCard(card)
  imageCounter++
  document.getElementById('playerScore').innerHTML = user.handCount
  if (user.handCount > 21) {
    document.getElementById('bust').innerHTML = compareScore()
  }
  //document.getEleme ntById('bust').innerHTML = winner
}

function dealButton () {
  user = new Player()
  user.name = "chetan"
  computer = new Player()
  newDeck = new Deck()
  for (var i = 1; i < 8; i++) {
    document.getElementById('image' + i).src = ''
  }
  imageCounter = 5
  var card = user.cardDraw(newDeck)
  document.getElementById('image3').src = user.displayCard(card)
  card = user.cardDraw(newDeck)

  document.getElementById('playerScore').innerHTML = user.handCount
  document.getElementById('image4').src = user.displayCard(card)
}

function standButton () {
  var card = computer.cardDraw(newDeck)
  document.getElementById('image1').src = computer.displayCard(card)
  var card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard(card)
  // add compare score and winning screen

  document.getElementById('computerScore').innerHTML = computer.handCount
  document.getElementById('bust').innerHTML = compareScore()


}

// function compareScore() {
//   if (user.handCount > computer.handCount) {
//     var winner = "You win"
//     console.log(winner)
//
//   }
//   else if (user.handCount == computer.handCount) {
//     var winner = "Draw"
//     console.log(winner)
//   }
//   else {
//     var winner = "Comuprer wins"
//     console.log(winner)
//
//   }
//   return winner
// }

function compareScore()
{
  if (user.handCount > 21)
   {
    var winner = user.name + " you bust"
    console.log(user.handCount)
    console.log(computer.handCount)
    console.log(winner)
    return winner;
   }
  else if (user.handCount == computer.handCount)
   {
     var winner = "draw"
     console.log(user.handCount)
     console.log(computer.handCount)
     console.log(winner)
     return winner
   }
   else if (user.handCount < computer.handCount)
   {
     var winner = "computer wins!!"
     console.log(winner)
     console.log(user.handCount)
     console.log(computer.handCount)
     return winner
   }
   else {
     var winner = user.name + " You win"
     console.log(winner)
     console.log(user.handCount)
     console.log(computer.handCount)
     return winner
   }

}

function myFuntion() {
  // Not sure if this stil does anything but im afraid to remove it
    var x = document.getElementById("dealCards");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }
