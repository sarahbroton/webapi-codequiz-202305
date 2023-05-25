var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
var timerElement = document.querySelector("#count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.querySelector("#quiz-container");
var startContainer = document.querySelector("#start-container");
var questionP = document.getElementById('question');
var choicesA = document.getElementById('choicesA');
var choicesB = document.getElementById('choicesB');
var choicesC = document.getElementById('choicesC');
var choicesD = document.getElementById('choicesD');
var quizButtons = document.getElementById ('quiz-buttons')
var currentQuestion = 0;


var timer;
var timeLeft = 75;

// START BUTTON
function startGame() {
  timeInterval()
  startContainer.style.display = "none";
  quizContainer.style.display = "block";
  renderQuestions();
}

// recursive looping
function renderQuestions() {
  questionP.textContent = questions[currentQuestion].question;
  choicesA.innerHTML = questions[currentQuestion].choices[0];
  choicesB.innerHTML = questions[currentQuestion].choices[1];
  choicesC.innerHTML = questions[currentQuestion].choices[2];
  choicesD.innerHTML = questions[currentQuestion].choices[3];

}


function timeInterval() {
  timer = setInterval(function () {
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
      // clearInterval(timeInterval);
        clearInterval(timer); 
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);

// when clicking on an answer...************************************************
function questionClick(event) {
  if (currentQuestion > 2 ){
    quizEnd(); 
    return; 
  }
  var buttonEl = event.target;
  console.log(buttonEl); 
  

  // if the clicked element is not a choice button, ignore
  if (!buttonEl.matches('button')) {
    return;
  }

  // check if user guessed wrong
  if (buttonEl.textContent !== questions[currentQuestion].answer) {
    // penalize time
    timeLeft -= 10;

    if (timeLeft < 0) {
      timeLeft = 0;
    }
    // wrong
    // feedbackEl.textContent = 'Wrong!';
    alert('Wrong!'); 
  } else {
    // right
    // feedbackEl.textContent = 'Correct!';
    alert('Correct!');
  }

  // move to next question
  currentQuestion++;

  // check if we've run out of questions
  if (timeLeft <= 0 || currentQuestion >= questions.length) {
    quizEnd();
  } else {
    renderQuestions();
  }
}

quizButtons.addEventListener("click", questionClick); 

function quizEnd(){
    console.log('quizEnd'); 
    clearInterval(timer); 
  // save time to local storage
    localStorage.setItem("currentUserScore", timeLeft)
  var testVariable = localStorage.getItem("currentUserScore")
  console.log(testVariable); 
  window.location.replace("highscores.html"); 

  
}