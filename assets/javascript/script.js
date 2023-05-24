var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector("#count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.querySelector("#quiz-container"); 
var startContainer = document.querySelector("#start-container"); 
var questionP = document.getElementById('question');
var choicesP = document.getElementById('choicesA', 'choicesB', 'choicesC', 'choicesD'); 
var currentQuestion = 0;

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
var timer;
var timeLeft = 75;

// START BUTTON
function startGame (){
    timeInterval()
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    renderQuestions();
    
    

}
// recursive looping
function renderQuestions() {
    questionP.textContent = questions[currentQuestion].question; 
    choicesP.textContent = choices[currentChoices].choices; 
    answer.textContent = answer[currentAnswer].answer; 

}

// Arrays used to create blanks and letters on screen
// var lettersInChosenWord = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];
// var blanksLetters = [""];

// Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];
// MATH.random

// for loop
// for (var i = )
//     split    
//     concat, 
//     if/else statements, 
//     "a"
//     array = 5 

// for (var i = )
//     array[a = 0, r = 1, r = 2, a = 3, y = 4]; 

//     change text content to 

// for (let i = 0; i < questions.length; i++) {
//     const element = array[i];
    
// }



// function timeInterval() {
//     // code here
// }

// const timeInterval = () => {
//     // code here
// }

function timeInterval() {
    setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerElement.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerElement.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerElement.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// document.addEventListener("keydown", function(event) {
 
// });


startButton.addEventListener("click", startGame);

