function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};




function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};



function showScores() {
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    if (quiz.score < 6) {
    gameOverHTML = "<h2 id='score'> Mehn! You Don't know Football </h2>";
    let element = document.getElementById("quiz1");
    element.innerHTML = gameOverHTML;
}else{
    gameOverHTML = "<h2 id='score'> Nice one! You are indeed a Football Analyst </h2>";
    let element = document.getElementById("quiz1");
    element.innerHTML = gameOverHTML;
}

};



// create questions here
var questions = [
    new Question("Who has the record of 91 goals in a year?", ["Ronaldo", "Messi","Kaka", "Lewandoski"], "Messi"),
    new Question("Who scored the only goal in 2013 UCL final?", ["Gotze", "Robben", "Hummels", "Muller"], "Robben"),
    new Question("Roberto Baggio plays for which country", ["Italy", "Germany","Brazil", "Spain"], "Italy"),
    new Question("Who won 1998 world player of the year?", ["Rivaldo", "Zidane", "Owen", "Ronaldo de lima"], "Zidane"),
    new Question("Who scored the 2nd goal in 2008 UCL final", ["Ronaldo", "Scholes", "Lampard", "Drogba"], "Lampard"),
    new Question("Who scored the 2nd goal in 2010 world cup?", ["Tshabalala", "Marquez","David villa", "Gomez"], "Marquez"),
    new Question("2009 UCL final was played in which city?", ["Paris", "Rome", "Manchester", "Milan"], "Rome"),
    new Question("Euro 2004 trophy was won by which country", ["Greece", "Portugal","France", "Holland"], "Greece"),
    new Question("Who won 2008 world player of the year?", ["Ronaldo", "Henry", "Messi", "Kaka"], "Ronaldo"),
    new Question("Who scored the 2nd goal in 2006 UCL final", ["Campbell", "Belleti", "Eto", "Deco"], "Eto")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

//countdown timer
let counter = {};
    window.addEventListener("load", function () {
        //countdown in seconds
        //example - 5 mins = 5x60 = 300 secs
        counter.end = 120;

        //get the containers
        counter.min = document.getElementById("cd-min");
        counter.sec = document.getElementById("cd-sec");

        //start if not past end date
        if (counter.end > 0) {
            counter.ticker = setInterval(function(){
                // stop if passed end time
                counter.end--;
                if (counter.end <= 0) {
                    clearInterval(counter.ticker);
                    counter.end = 0;
                    showScores();
                }

                //calculate remaining time
                let secs = counter.end;
                let mins = Math.floor(secs / 60);// 1 min = 60 secs
                secs -= mins * 60;

                //update HTML
                counter.min.innerHTML = mins;
                counter.sec.innerHTML = secs;
            }, 1000);
        }
    });

