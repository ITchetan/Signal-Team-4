// **** DAILY MEETING 9.30am and 1.00pm

function controller() {
//Handles the game logic
  initiliseGame()
  while (player.handCount < 21 && standButton.pressed = false) {
    if drawButton.pressed == true {
      player.cardDraw(user)
      player.handCountUpdate()
      drawButton.pressed = false
    }
  }
  player.cardDraw(computer)
  player.cardDraw(computer)
  player.compareHandCount()
  player.displayWinner()
}
