var user
var coputer
var newDeck
var imageCounter =  5
var playerArray =[]
var playerWinCounter = 0;
var computerWinCounter = 0;
var userWinCount
var firstTime = true;
var winner

function hitButton () {
  bleep.play()
  var card = user.cardDraw(newDeck)
  document.getElementById('image' + imageCounter).src = user.displayCard(card)
  imageCounter++

  document.getElementById('playerScore').innerHTML = user.handCount
  if (user.handCount > 21) {

    document.getElementById('overlay').style.display = "block"
    document.getElementById('bust').innerHTML = compareScore()

    //var result = compareScore()
    //document.getElementById('bust').innerHTML = compareScore()
    //document.getElementById('bust').innerHTML = result

  }

}

function dealButton () {
  bleep.play()
  document.getElementById("deal_button").disabled = true;
  document.getElementById("hit_button").disabled = false;
  document.getElementById("stand_button").disabled = false;
  user = new Player()


var str = (document.getElementById("playerName").value);
user.name = str.toUpperCase();

if (firstTime) {

  recallData(user.name)
}
  //user.name = document.getElementById("playerName").value
  //recallData(user.name)
  computer = new Player()
  computer.name = "Dealer"
  newDeck = new Deck()
  for (var i = 1; i < 8; i++) {
    document.getElementById('image' + i).src = ''
  }
  document.getElementById('computerScore').innerHTML = computer.handCount
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
  card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard(card)

  document.getElementById('computerScore').innerHTML = computer.handCount
    document.getElementById('overlay').style.display = "block"
  document.getElementById('bust').innerHTML = compareScore()


}

function off(){
  document.getElementById("overlay").style.display ="none"
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


function storeData(playerWinsCounter1,computerWinCounter1)
{
  var userName= user.name
  var userScore = playerWinsCounter1
  var computerName = "Dealer"
  var computerScore = computerWinCounter1
  //var playerArray = []


  var plyObj = [{"playerName": userName, "playerScore": userScore},{"playerName":computerName,"playerScore": computerScore}];
  playerArray.push(plyObj);
  localStorage.playerRecord = JSON.stringify(plyObj);
  playerArray = JSON.parse(localStorage.playerRecord);
  console.log(playerArray)
  document.getElementById('playerWins').innerHTML = playerArray[0].playerScore
  document.getElementById('computerWins').innerHTML = playerArray[1].playerScore
}

function recallData(userName)
    {
      firstTime = false;
      playerArray = JSON.parse(localStorage.playerRecord);
        if (playerArray[0].playerName == userName)
        {
          window.alert("Last top score : " +userName +' '+ playerArray[0].playerScore + " Dealer "+ playerArray[1].playerScore  )
            document.getElementById('playerWins').innerHTML = playerArray[0].playerScore
          }
        else
        {

        window.alert("No data avaiable. Please continue playing")

        }
   }

   function userName()
   {
     window.alert("Please enter your name")
   }
