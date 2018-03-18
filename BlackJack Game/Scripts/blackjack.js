var user
var coputer
var newDeck
var imageCounter =  5
var playerArray =[]
var playerWinCounter = 0;
var computerWinCounter = 0;
var userWinCount

function hitButton () {
  bleep.play()
  var card = user.cardDraw(newDeck)
  document.getElementById('image' + imageCounter).src = user.displayCard(card)
  imageCounter++

  document.getElementById('playerScore').innerHTML = user.handCount
  if (user.handCount > 21) {
    document.getElementById('bust').innerHTML = compareScore()
  }

}

function dealButton () {
  bleep.play()
  document.getElementById("deal_button").disabled = true;
  document.getElementById("hit_button").disabled = false;
  document.getElementById("stand_button").disabled = false;
  user = new Player()
  user.name = "Chetan"
  computer = new Player()
  computer.name = "Dealer"
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
  bleep.play()
  document.getElementById("stand_button").disabled = true;
  document.getElementById("hit_button").disabled = true;
  document.getElementById("replay_button").disabled = false;
  var card = computer.cardDraw(newDeck)
  document.getElementById('image1').src = computer.displayCard(card)
  var card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard(card)
  // add compare score and winning screen
  document.getElementById('computerScore').innerHTML = computer.handCount
  document.getElementById('bust').innerHTML = compareScore()
  //storeData()

  //document.getElementById("deal_button").disabled = false;

  //document.getElementById("stand_button").disabled = true;


}

function replayButton () {
  bleep.play()
  document.getElementById('image1').src = computer.displayReset()
  document.getElementById('image2').src = computer.displayReset()
  document.getElementById('image3').src = user.displayReset()
  document.getElementById('image4').src = user.displayReset()
  document.getElementById('image5').src = user.displayReset()
  document.getElementById('image6').src = user.displayReset()
  document.getElementById('image7').src = user.displayReset()
  document.getElementById('bust').innerHTML =user.displayReset()
  user.handCount =0
  computer.handCount =0
  document.getElementById('playerScore').innerHTML = user.handCount
  document.getElementById('computerScore').innerHTML = computer.handCount
  document.getElementById("deal_button").disabled = false;
  document.getElementById("hit_button").disabled = true;
  document.getElementById("stand_button").disabled = true;
  document.getElementById("replay_button").disabled = true;
  //storeData()
}


function compareScore()
{
  var winner
  if (user.handCount > 21)
   {
    computerWinCounter= computerWinCounter + 1
    storeData(playerWinCounter,computerWinCounter);
    winner = user.name + " Bust!!"
    console.log(user.handCount)
    console.log(computer.handCount)
    console.log(winner)
    document.getElementById("stand_button").disabled = true;
    document.getElementById("hit_button").disabled = true;
    document.getElementById("replay_button").disabled = false;
    //return winner;
   }
  else if (user.handCount == computer.handCount)
   {
     winner = "Draw!!"
     console.log(user.handCount)
     console.log(computer.handCount)
     console.log(winner)
     //return winner
   }
   else if (user.handCount < computer.handCount)
   {
     computerWinCounter= computerWinCounter + 1
     storeData(playerWinCounter,computerWinCounter);
     winner = "Dealer wins!!"
     console.log(winner)
     console.log(user.handCount)
     console.log(computer.handCount)
   }
   else {
    playerWinCounter= playerWinCounter + 1
    //console.log(playerWinCounter)
    storeData(playerWinCounter,computerWinCounter);
     winner = user.name + " wins!!"
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


function storeData(playerWinsCounter1,computerWinCounter1)
{
  var userName= "Chetan"
  var userScore = playerWinsCounter1
  var computerName = "Dealer"
  var computerScore = computerWinCounter1
  var playerArray = []

  var plyObj = [{"playerName": userName, "playerScore": userScore},{"playerName":computerName,"playerScore": computerScore}];

  playerArray.push(plyObj);
  //localStorage.playerRecord= JSON.parse(plyObj);
  localStorage.playerRecord = JSON.stringify(plyObj);
  playerArray = JSON.parse(localStorage.playerRecord);
  console.log(playerArray)
  document.getElementById('playerWins').innerHTML = playerArray[0].playerScore
  document.getElementById('computerWins').innerHTML = playerArray[1].playerScore
}
