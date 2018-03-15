// **** DAILY MEETING 9.30am and 1.00pm

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
    }
  }
  //Start of computer's turn
  //Draws two cards
  player.cardDraw(computer)
  player.cardDraw(computer)

  //Compares handCounts and displays winner
  player.compareHandCount()
  player.displayWinner()
}
