

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex =0;
}

function Question(questionText,choices,answer){
    this.questionText = questionText;
    this.answer = answer;
    this.choices = choices;
}


Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function (){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.checkOptionsWithAnswer = function(userAnswer){
  if (this.getQuestionByIndex().answer === userAnswer){
      this.score++;
  }
  this.questionIndex++;
}

function loadQuestions(){
    //if quiz is ended then show score
    if (quiz.isEnded()){
        showScore();
    } 
    else {
        //get question and update HTML page
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().questionText ;
        
        //get choices 
        var choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++)
        {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOption("btn" +i,choices[i]);
        }

        showProgress();
    }
};

function handleOption(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.checkOptionsWithAnswer(choice);
        loadQuestions();
    }
};

function showScore(){
    var end = "<h1> Results </h1>";
    end = "<h2> Your score " +quiz.score +" and percentage " +(quiz.score/questions.length *100) +"% <h2>";
    var quizes = document.getElementById("quiz");
    quizes.innerHTML = end;
};

function showProgress(){
     var currQues = quiz.questionIndex +1;
     var prg = document.getElementById("progress");
     prg.innerHTML = "Question " + currQues + "of " + quiz.questions.length;
};

let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];

let quiz = new Quiz(questions);

loadQuestions();