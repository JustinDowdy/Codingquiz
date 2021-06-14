/*
Justin Dowdy
June 6, 2021
Challenge 4

This assignment makes a quiz and shows results, with a timer.

Summary:
myQuestions is array with all the questions.
...
questionCount is the number of total questions in the quiz.
...
timeLeft is the total number of seconds available in the quiz.
...
The function quizTimer gets the timer to start counting down by one second (hence, 1000).
If this function hits 0, it stops.
...
The function buildQuiz is used to ask questions. 
The for loop inside this function is giving every answer a radio and every question a question number.
output.push executes the questions onto the screen.
The function showResults shows the results of the array made in buildQuiz.
The if statement shows questions answered correctly after you submit the quiz.
The answerContainers marks the correct answers green and the incorrect red.
...
startBtn.addEventListener makes it so that when you click 'Start Quiz' the timer starts and the questions pop on the screen.
submitButton.addEventListener makes it so that when you click 'Submit Quiz' the results pop on the screen.
*/


var startBtn = document.getElementById("startButton");
var timer = document.getElementById("timerCountDown");


const myQuestions = [
    {
      question: "Commonly used data types do NOT include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if / else statement is enclosed with _____.",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
      },
      correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
        },
        correctAnswer: "c"
    },
    {
        question: "What is jQuery?",
        answers: {
            a: "jQuery is a JavaScript library that emphasizes 'write less, do more'.",
            b: "a second Barnes & Nobles",
            c: "JK Rowlings new series",
            d: "My brother Josiah's wealth of knowledge",
        },
        correctAnswer: "a"
    },
  ];

/*var questionCount = 0;

function nextQuestion(){
    document.getElementById("button1").innerText = arr[questionCount].item1
}
    document.getElementById("button1").addEventListener("click", function (event){
        event.preventDefault();
    }
    */


var timeLeft = 75;

function quizTimer() {
    var intervalCount = setInterval(function(){ 
        timeLeft-- ;
        console.log(timeLeft);
        timer.submitButton = timeLeft;
        if(timeLeft === 0) {
            clearInterval(intervalCount);
        }
     }, 1000);
  }

  //Function used to ask questions.
  //Code taken from sitepoint.com
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(var letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  //Code taken from sitepoint.com
  //Shows the results of the array made in buildQuiz
  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  

  startBtn.addEventListener("click", function() {
   
   quizTimer();
  buildQuiz(); //This builds the questions/answers and it displays them.
    
    // Event listeners
    submitButton.addEventListener('click', showResults);

  });

  //DONE - Get the start button from the html. 
  //DONE - Add an Event Listener.
  //DONE - When the start button is clicked, we want the timer to start 
  // Take the array (const), we want to pull the question from it. 
  //and we want the user to be presented with the first question.
  //Each question is going to have 4 choices, the question itself, and the answer.
  //Add event listeners to each of the multiple choice. 
  //When the multiple choice button is hit, you want to check if that is the correct answer for the current question.
  //Just create one function for all 5 questions.
  
