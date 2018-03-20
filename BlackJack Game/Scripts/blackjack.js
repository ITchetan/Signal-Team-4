// Variables to be used when declaring new classes and resetting the program
var user
var computer
var newDeck
var imageCounter =  5
var data1
var data2


// Variables used for storing data
var playerArray = []
var playerWinCounter = 0
var computerWinCounter = 0
var userWinCount
var firstTime = true;
var winner

// To be used for when the player wants to draw a new card
function hitButton () {
  bleep.play()
  var card = user.cardDraw(newDeck)
  // Displays the card on the html
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

// To be used at the start of the game, gives two cards to the player and enables the hit and stand buttons
function dealButton () {
var str = (document.getElementById("playerName").value);
  if (str =="") {
    window.alert("Please enter your name")
  } else {
    document.getElementById('deal_button').style.display = 'none';
    document.getElementById('replay_button').style.display = 'block';
    bleep.play()
    document.getElementById("deal_button").disabled = true;
    document.getElementById("hit_button").disabled = false;
    document.getElementById("stand_button").disabled = false;
    // Decalring new instances of classes to reset the attributes so the game begins from fresh again
    user = new Player()


  //var str = (document.getElementById("playerName").value);
  user.name = str.toUpperCase();


    //recallData(user.name)
  //  recallScore()

    //user.name = document.getElementById("playerName").value
    //recallData(user.name)
    computer = new Player()
    computer.name = "Dealer"
    newDeck = new Deck()

    if (firstTime) {
      firstTime = false
      if (localStorage.getItem(user.name) === null)
        {
            localStorage.setItem(user.name,0)
            localStorage.setItem(computer.name,0)
        }
      data1 = localStorage.getItem(user.name)
      data1 = parseInt(data1)
      window.alert(user.name + " your score is " + data1)
      data2 = localStorage.getItem(computer.name)
      data2 = parseInt(data2)

      console.log(data1)
      console.log(data2)

  }

  }

  document.getElementById('computerScore').innerHTML = computer.handCount
  imageCounter = 5
  // creates two new cards and displays them on the board
  var card = user.cardDraw(newDeck)
  document.getElementById('image3').src = user.displayCard(card)
  card = user.cardDraw(newDeck)
  document.getElementById('playerScore').innerHTML = user.handCount
  document.getElementById('image4').src = user.displayCard(card)

}

// To be used when the player is finished drawing Cards
// Will give two cards to the computer and then compare the score of the player and computer
function standButton () {

  bleep.play()
  // Reenables the hit and stand buttons and diables the replay button
  document.getElementById("stand_button").disabled = true;
  document.getElementById("hit_button").disabled = true;
  document.getElementById("replay_button").disabled = false;

  // Creates two new cards and adds them to the computer's hand and displays them on the board
  var card = computer.cardDraw(newDeck)
  document.getElementById('image1').src = computer.displayCard(card)
  card = computer.cardDraw(newDeck)
  document.getElementById('image2').src = computer.displayCard(card)

  document.getElementById('computerScore').innerHTML = computer.handCount
    document.getElementById('overlay').style.display = "block"
  document.getElementById('bust').innerHTML = compareScore()

  // data1 = data1 + playerWinCounter
  // data2 = data2 + computerWinCounter
  // console.log(data1)
  // console.log(data2)
  // localStorage.setItem(user.name,data1)
  // localStorage.setItem(computer.name,data2)

  if ((user.handCount > computer.handCount) && (user.handCount < 22)) {
    data1 += 1
    localStorage.setItem(user.name,data1)
    console.log(data1)

}


}

function off(){
  document.getElementById("overlay").style.display ="none"
}




// TO be used when the user wants to replay the game, resets the game board by
// Removing all the card images

function replayButton () {
  bleep.play()
  document.getElementById('replay_button').style.display = 'none';
  document.getElementById('deal_button').style.display = 'block';

  document.getElementById('image1').src = computer.displayReset()
  document.getElementById('image2').src = computer.displayReset()
  document.getElementById('image3').src = user.displayReset()
  document.getElementById('image4').src = user.displayReset()
  document.getElementById('image5').src = user.displayReset()
  document.getElementById('image6').src = user.displayReset()
  document.getElementById('image7').src = user.displayReset()
  document.getElementById('bust').innerHTML = user.displayReset()
  user.handCount = 0
  computer.handCount = 0
  document.getElementById('playerScore').innerHTML = user.handCount
  document.getElementById('computerScore').innerHTML = computer.handCount
  document.getElementById("deal_button").disabled = false;
  document.getElementById("hit_button").disabled = true;
  document.getElementById("stand_button").disabled = true;
  document.getElementById("replay_button").disabled = true;
}

// function quitButton(){
//
//   //localStorage.setItem(user.name,playerWinCounter)
//   //localStorage.setItem(computer.name,computerWinCounter)
//   data1 = data1 + playerWinCounter
//   data2 = data2 + computerWinCounter
//   console.log(data1)
//   console.log(data2)
//   localStorage.setItem(user.name,data1)
//   localStorage.setItem(computer.name,data2)
//   window.close()
//
//
//
// }




function compareScore () {
  var winner
  if (user.handCount > 21) {

    computerWinCounter = computerWinCounter + 1
    document.getElementById('playerWins').innerHTML = playerWinCounter
    document.getElementById('computerWins').innerHTML = computerWinCounter
    //storeData(playerWinCounter, computerWinCounter);

    winner = user.name + " Bust!!"
    console.log(winner)
    document.getElementById("stand_button").disabled = true;
    document.getElementById("hit_button").disabled = true;
    document.getElementById("replay_button").disabled = false;
    //return winner
  }
  else if (user.handCount == computer.handCount) {
     winner = "Draw!!"
     console.log(user.handCount)
     console.log(computer.handCount)
     console.log(winner)
     //return winner
   }

   else if (user.handCount < computer.handCount) {
     computerWinCounter = computerWinCounter + 1
     document.getElementById('playerWins').innerHTML = playerWinCounter
     document.getElementById('computerWins').innerHTML = computerWinCounter
     //storeData(playerWinCounter,computerWinCounter);
     winner = "Dealer wins!!"
     console.log(winner)
     console.log(user.handCount)
     console.log(computer.handCount)
   }
   else {
    playerWinCounter = playerWinCounter + 1
    //console.log(playerWinCounter)
    document.getElementById('playerWins').innerHTML = playerWinCounter
    document.getElementById('computerWins').innerHTML = computerWinCounter
    //storeData(playerWinCounter,computerWinCounter);
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
  localStorage.setItem(user.name,playerWinsCounter1)
  localStorage.setItem(computerName,computerWinCounter1)




  // var plyObj = [{"playerName": userName, "playerScore": userScore},{"playerName":computerName,"playerScore": computerScore}];
  // playerArray.push(plyObj);
  // localStorage.playerRecord = JSON.stringify(plyObj);
  // playerArray = JSON.parse(localStorage.playerRecord);
  // console.log(playerArray)
  // document.getElementById('playerWins').innerHTML = playerArray[0].playerScore
  // document.getElementById('computerWins').innerHTML = playerArray[1].playerScore
  localStorage.setItem(user.name,playerWinsCounter1)
  localStorage.setItem(computerName,computerWinCounter1)
  //localStorage.setItem('dude', 'joe')
  // localStorage.setItem('chet', 'yes')
  // var test = localStorage.getItem('dude')
  // var test1 = localStorage.getItem('chet')
  // var test1 = localStorage.getItem(user.name)
  // var test2 = localStorage.getItem(computerName)
  // // console.log(test)
  // console.log(test1)
  // console.log(test2)


}

// function recallData(userName)
//     {
//       firstTime = false;
//       playerArray = JSON.parse(localStorage.playerRecord);
//         if (playerArray[0].playerName == userName)
//         {
//           window.alert("Last top score : " +userName +' '+ playerArray[0].playerScore + " Dealer "+ playerArray[1].playerScore  )
//           document.getElementById('playerWins').innerHTML = playerArray[0].playerScore
//
//           }
//         else
//         {
//
//         window.alert("No data avaiable. Please continue playing")
//
//         }
//    }

function recallScore()
{
  var computerName = "Dealer"
  var test1 = localStorage.getItem(user.name)
  var test2 = localStorage.getItem(computerName)

  console.log(test1)
  console.log(test2)
  // var reset1 = localStorage.setItem(user.name, 0)
  // var reset2 = localStorage.setItem(computerName,0)
  //console.log(reset1)
  //console.log(reset2)


}




   function userName()
   {
     window.alert("Please enter your name")
   }
