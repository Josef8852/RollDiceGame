'use strict'

/* DOM */
let firstPlayerScore = document.querySelector('.player1-score') ;
let secondPlayerScore = document.querySelector('.player2-score') ; 


let currentScore1 = document.querySelector('.current1-score') ; 
let currentScore2 = document.querySelector('.current2-score') ; 

let diceImg = document.querySelector('.dice') ; 
/* Buttons */

let newGame = document.querySelector('.new-game') ; 
let rollDice = document.querySelector('.roll-dice')  ;
let hold = document.querySelector('.hold')  ;

let boxColor = document.querySelector('.box') ; 

let checkPlayerOne = true , checkPlayerTwo  = true ; 




let randomDice = Math.floor(Math.random() * (7-1) + 1)  ;




function changePlayer1 () {
  boxColor.style.background = 'linear-gradient(90deg , rgb(158, 95, 105) 50% , rgb(219, 173, 180) 50%  )' ; 
}

function changePlayer2 () {
  boxColor.style.background = 'linear-gradient(90deg , rgb(219, 173, 180) 50%  ,  rgb(158, 95, 105) 50%  )' ; 
}




let current1 = 0 , current2 = 0   ; 


rollDice.addEventListener('click' , function () {

 

  randomDice = Math.floor(Math.random() * (7-1) + 1)  ;
  diceImg.src = "/dice-" + randomDice +".png" ; 
  diceImg.style.display = 'block';

  if(randomDice === 1 && checkPlayerOne) {
      changePlayer1() ; 
    checkPlayerTwo = true ; 
    checkPlayerOne = false ;
    currentScore1.textContent =  0  ;
    current2 = 0 ; 
  }
  else if(randomDice === 1 && checkPlayerTwo) {
    changePlayer2();
    checkPlayerTwo = false ;
    checkPlayerOne = true ;  
    currentScore2.textContent = 0 ; 
    current1 = 0  ;
  }


    if(checkPlayerOne) {
        current1 += randomDice
        currentScore1.textContent = current1  ;
        current2 = 0 ;
        currentScore2.textContent = 0 ; 
    }
    else if(checkPlayerTwo) {
      current2 += randomDice ; 
      currentScore2.textContent = current2 ; 
      current1 = 0 ; 
      currentScore1.textContent = 0 ; 
    }
    

});


let totalScore1 = 0 , totalScore2 = 0 ; 


hold.addEventListener('click' , function () {
  if(checkPlayerOne) {
    totalScore1 += current1; 
    checkPlayerTwo = true ; 
    checkPlayerOne = false ;
    changePlayer1() ; 
    firstPlayerScore.textContent = totalScore1 ; 
    currentScore1.textContent =  0  ;
    current2 = 0 ; 
  }
  
  else if(checkPlayerTwo) {
    totalScore2  += current2 ; 
    checkPlayerTwo = false ;
    checkPlayerOne = true ; 
   changePlayer2() ; 
   secondPlayerScore.textContent = totalScore2 ; 
   currentScore2.textContent = 0 ; 
   current1 = 0  ;
  }

});




newGame.addEventListener('click' , function () {
  checkPlayerOne = true , checkPlayerTwo  = true ; 
  diceImg.style.display = 'none' ; 
  currentScore1.textContent =  0  ;
  currentScore2.textContent = 0 ; 
  firstPlayerScore.textContent = 0;  
  secondPlayerScore.textContent = 0 ; 
  current1 = 0   ;
  current2 = 0  ;
  totalScore1 = 0 ; 
  totalScore2 = 0 ; 

});













