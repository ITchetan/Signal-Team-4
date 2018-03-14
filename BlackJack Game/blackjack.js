// **** DAILY MEETING 9.30am and 1.00pm

function controller() {
  //initilise game
  // handles button presses
  //
  // while count < 21 and stand is not pressed{

  //    IF draw presed
  //       draw(player)
  //       check
  //draw(computer)
  //draw(computer)
  //compares scores
  //says who wins


}


function createDeck () {
  //creates an array of 52 cards
  //return deck
}

function draw (deck, hand) {
// choose random number from 0 - array.length-1
// remove selected card from deck and put into hand
// Button link = HIT

}

function check(hand) {
//returns count of hand

}

function initilise(){
  // creates deck
  // draws two cards
  // Button Link = DEAL
}

// ------- Button onclick functions ---------

function dealButton() {
    var x = document.getElementById("dealCards");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hitButton () {
  alert("Draw player another card");
  // display 1 card to player
}

function standButton () {
  alert("player has selected stand, do not issue any more cards");
  // do not draw any more cards to player
}



