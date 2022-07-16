var questions = [
    {
        title: "Arrays in JS can be used:",
        choices: ["numbers and strings", "other arrays", "boolean", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "Commonly used data types do NOT include:",
        choices: ["strings", "boolean", "alert", "number"],
        answer: "boolean"
    },

    {
        title: "String values must be closed within ____ when being assigned to variables",
        choices: ["comma", "curly bracket", "quotes", "parenthesis"],
        answer: "curly bracket"
    },

    {
        title: "Condition in an if/else statement is closed with:",
        choices: ["quotes", "curly brackets", "parenthesis", "square bracket"],
        answer: "parenthesis"
    },

    {
        title: "A useful tool during development and debugging for printing content:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "for loops"
    }
]

var startBox = document.getElementById("startBox");
var questionBox = document.getElementById("questionBox");
var startButton = document.getElementById("startButton");
var choices = document.getElementById("choices");

function startQuiz() {
    console.log("start button clicked")
    startBox.style.display = "none";
    questionBox.style.display = "block"
    getQuestions()
}




function getQuestions() {
    var currentQuestion= 0
    var currentChoices = 0
    questionBox.textContent = questions[currentQuestion].title
    choices.textContent = questions[currentChoices].choices
    
    console.log(choices)
     currentQuestion.choices.forEach(function(choices, i){
         var choicesList= document.createElement("button")
         choicesList.setAttribute("class", "choice")
         choicesList.onClick= questionClick
     })
}



