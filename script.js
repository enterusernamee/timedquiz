//declare the UI elements
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')



var app={
        questions:[
            {
                q:'Arrays in Javascript can be used:',
                options: ['numbers and strings', 'other array', 'boolean', 'all of the above'],
                answer:4
            },
            {
                q:'Commonly used date types DO NOT include:',
                options: ['strings', 'boolean', 'alert', 'number'],
                answer:2
            },
            {
                q:'String values must be closed within ___ when being assigned to variables',
                options: ['comma', 'curly bracket', 'quotes', 'parenthesis'],
                answer:2
            },
            {
                q:'Condition in an if/else statement is closed with:',
                options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
                answer:3
            },                                
        {
            q:'A useful tool during development and debugging for printing content:',
            options: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
            answer:3
        }
    ],
        index:0,

        //load a question using the index
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                //show the end screen
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        //check if answer is correct or not
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        //disable options once user selects an option
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}
