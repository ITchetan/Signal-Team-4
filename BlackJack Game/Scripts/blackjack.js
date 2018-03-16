var user
var computer
var newDeck
var imageCounter = 5;

function hitButton () {
  var card = user.cardDraw(newDeck)
  document.getElementById('image' + imageCounter).src = user.displayCard(card)
  imageCounter++
  document.getElementById('playerScore').innerHTML = user.handCount
}

function dealButton () {
  user = new Player()
  computer = new Player()
  newDeck = new Deck()
  for (var i = 1; i < 8; i++) {
    document.getElementById('image' + i).src = ''
  }
  document.getElementById('computerScore').innerHTML = computer.handCount
  imageCounter = 5
  var card = user.cardDraw(newDeck)
  document.getElementById('image3').src = user.displayCard(card)
  card = user.cardDraw(newDeck)
  document.getElementById('image4').src = user.displayCard(card)
  document.getElementById('playerScore').innerHTML = user.handCount
}

function standButton () {
  var card = computer.cardDraw(newDeck)
  document.getElementById('image1').src = computer.displayCard(card)
  card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard(card)
  // add compare score and winning screen
  document.getElementById('computerScore').innerHTML = computer.handCount
}

function compareScore() {
  if (user.handCount > computer.handCount) {
    var winner = "You win!!"
  }
  if (user.handCount == computer.handCount) {
    var winner = "Draw!"
  } else {
    var winner = "Computer wins!!"
  }
  return winner
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
