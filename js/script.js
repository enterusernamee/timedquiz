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
    // currentQuestion.choices.forEach(function(choices, i){
    //     var choicesList= document.createElement("button")
    //     choicesList.setAttribute("class", "choice")
    //     choicesList.onClick= questionClick
    // })
}



