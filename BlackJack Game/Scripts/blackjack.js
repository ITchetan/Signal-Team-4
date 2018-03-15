// **** DAILY MEETING 9.30am and 1.00pm
var user
var computer
var newDeck

<<<<<<< HEAD
function controller() {
//Handles the game logic

  //Creates deck and draw two cards to the player
  deck.CreateDeck()
  player.cardDraw(User)
  player.cardDraw(User)



  //Allows the player to draw cards as long as they haven't gone over 21
  // or pressed stand. Once these conditions are false, ends the players turn
  while (player.handCount < 21 && standButton.pressed = false) {
    if drawButton.pressed == true {
      player.cardDraw(user)
      player.handCountUpdate()
      drawButton.pressed = false
=======
function hitButton () {
  user.cardDraw(newDeck)
}

function dealButton () {
  user = new Player()
  computer = new Player()
  newDeck = new Deck()

  // console.log(deck.decklist)
  user.cardDraw(newDeck)
  user.cardDraw(newDeck)
}

function standButton () {
  computer.cardDraw(newDeck)
  computer.cardDraw(newDeck)
  // add compare score and winning screen
}



function myFunction() {
    var x = document.getElementById("dealCards");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
>>>>>>> 5a239b0fa595b042b2de70387fd56e68abcff163
    }
}


// function controller() {
// //Handles the game logic
//
//   //Creates deck and draw two cards to the player
//   deck.CreateDeck()
//   player.cardDraw(User)
//   player.cardDraw(User)
//
//   //Allows the player to draw cards as long as they haven't gone over 21
//   // or pressed stand. Once these conditions are false, ends the players turn
//   while (player.handCount < 21 && standButton.pressed = false) {
//     if drawButton.pressed == true {
//       player.cardDraw(user)
//       player.handCountUpdate()
//       drawButton.pressed = false
//     }
//   }
//   //Start of computer's turn
//   //Draws two cards
//   player.cardDraw(computer)
//   player.cardDraw(computer)
//
//   //Compares handCounts and displays winner
//   player.compareHandCount()
//   player.displayWinner()
// }
