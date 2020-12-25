
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
    gameOverHTML += "<h2 id='score'> Your score: " + (quiz.score/2)*10 + "%" +"</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    if (quiz.score < 13) {
    gameOverHTML = "<h2 id='score'> Mehn! You Don't know Football <br>&#128544;</h2>";
    let element = document.getElementById("quiz1"); 
    let visible = document.getElementById("hide");
    visible.style.display = "block";
    element.innerHTML = gameOverHTML;
}else{
    gameOverHTML = "<h2 id='score'> Nice one! You are indeed a Football Analyst <br>&#128512;</h2>";
    let element = document.getElementById("quiz1");
    let visible = document.getElementById("hidden");
    visible.style.display = "block";
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
    new Question("Who scored the 2nd goal in 2006 UCL final", ["Campbell", "Belleti", "Eto", "Deco"], "Eto"),

    new Question("Who won 2018 FIFA men player of the year award?", ["Ronaldo", "Messi","Modric", "Lewandoski"], "Modric"),
    new Question("Which country hosted 2006 world cup tournament?", ["Brazil", "South Africa", "Italy", "Germany"], "Germany"),
    new Question("Which football club is known as the Los Blancos?", ["Napoli", "R.Madrid","AC Milan", "Barcelona"], "R.Madrid"),
    new Question("Which Nation won the 1996 Olympics Gold Medal?", ["Ghana", "Nigeria", "Spain", "England"], "Nigeria"),
    new Question("R.Madrid VS Barcelona derby is known as the ...", ["El clasico", "derby", "El cashico", "Match"], "El clasico"),
    new Question("Roger Milla is from which country?", ["Ghana", "Italy","Cameroon", "Senegal"], "Cameroon"),
    new Question("Shevchenko played for which football Club?", ["Ac Milan", "Juventus", "R.Madrid", "Seville"], "Ac Milan"),
    new Question("AFCON 2008 trophy was won by which country", ["Egypt", "Ghana","Cote D'ivore", "Tunisia"], "Egypt"),
    new Question("Nicholas Anelka played for which club?", ["Man.United", "R.Madrid", "Bayern Munich", "PSG"], "R.Madrid"),
    new Question("Who scored the 1st goal in 2015 UCL final", ["Neymar", "Morata", "Messi", "Rakitic"], "Rakitic")

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
        counter.end = 300;

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

// page redirection
	function myChange(){
		window.location.href="index.html";
	}

    function myVisit(){
		window.location.href="https://echris.netlify.app";
	}

	
