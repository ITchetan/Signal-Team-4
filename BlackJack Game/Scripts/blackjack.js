// **** DAILY MEETING 9.30am and 1.00pm
var user
var computer
var newDeck
var imageCounter = 5;

function hitButton () {
  var card = user.cardDraw(newDeck)
  document.getElementById('image' + imageCounter).src = user.displayCard (card)
  imageCounter++
}

function dealButton () {
  user = new Player()
  computer = new Player()
  newDeck = new Deck()
  for (var i = 1; i < 8; i++) {
    document.getElementById('image' + i).src = ''
  }
  imageCounter = 5

  // console.log(deck.decklist)
  var card = user.cardDraw(newDeck)
  document.getElementById('image3').src = user.displayCard (card)
  var card = user.cardDraw(newDeck)
  document.getElementById('image4').src = user.displayCard (card)

  user.handCount()
}

function standButton () {
  var card = computer.cardDraw(newDeck)
  document.getElementById('image1').src = computer.displayCard (card)
  var card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard (card)
  // add compare score and winning screen
}

function myFunction() {
    var x = document.getElementById("dealCards");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }
