$(document).ready(function () {
    
    /* I declare variables */
    var questions = [], responses = [], correct, total, questionNumber, wrong;
    
    /* I make the question objects and put them into the questions array */
    questions[0] = {question: "<p>Dr. Moriarty &ndash; Holmes arch nemesis &ndash; and Holmes were said to have killed each other in Switzerland by fighting by and then falling into a forceful, rocky waterfall.<br><br>What might the name be of the waterfall?</p>",
                    answer: "Reichenbach fall",
                    choices: ["Rheinburger fall", "Westfalden fall", "Reichenbach fall"],
                    illus: '<img class="illus" src="images/reichenbach.jpg" alt="picture of waterfall"/>'
        };
    questions[1] = {
        question: "<p>Holmes is often quoted as saying: &quot;When you have eliminated the impossible, whatever remains, however improbable, must be the truth&quot;<br><br>What is this Holmesian deduction generally called by formal logicians?</p>",
        answer: "Abduction",
        choices: ["Abduction", "Forensics", "Induction"],
        illus: '<img class="illus" src="images/forensic.jpg" alt="holmes conducting forensic investigation"/>'
    };
    questions[2] = {
        question: "<p>In <i>'A Scandal In Bohemia'</i> Holmes meets a remarkable woman who outwits him. His companion Dr. Watson wrote: <p>&quot;To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name... It was not that he felt any emotion akin to love ...yet there was but one woman to him... of dubious and questionable memory.&quot;<br><br>What was her name?</p>",
        answer: "Irene Adler",
        choices: ["Violet Hunter", "Irene Adler", "Helen Stoner"],
        illus: '<img class="illus" src="images/woman.jpg" alt="picture of woman"/>'
    };
    
    responses[0] = "<div id='response'><h2>Well played, my fellow detective</h2><p> You must be an apprentice of Holmes! Such cunning, such knowledge. Such powers of deduction! Have a pibe, my friend.</p></div>";
    responses[1] = "<div id='response'><h2>Nicely done</h2><p>My dear friend, you did well. Certainly, you would do even better with more investigation of Holmes.<p></div>";
    responses[2] = "<div id='response'><h2>Now, Watson, come again</h2><p>You might want to visit the nearest book store and acquire some Sherlock Holmes novels. And enjoy the investigation!.<p></div>";

    /* I declare some helper function */
        /* Shows current question number */
    function showQuestionNumber() {
        $("#topright").show();
        $("#question_number b").text(questionNumber + 1);
    }
            
        /* I initialize the game variables and show the total number of questions*/
    function gameInfoReset() {
        console.log("gameInfoReset ran");
        total = questions.length;
        correct = 0;
        wrong = 0;
        questionNumber = 0;
        showQuestionNumber();
        $("#total_questions b").text(total);
    }

        /* Puts number of right and wrong answers and shows appropriate response dep. on percentage of numbers answered correctly */
    function getResult() {
        console.log("getResult ran");
        wrong = total - correct;
        $("#end_total_right b").text(correct);
        $("#end_total_wrong b").text(wrong);
        var answer_percent = correct / total;
        if (answer_percent >= 0.67) {
            $("#end").prepend(responses[0]);
        } else if (answer_percent >= 0.34) {
            $("#end").prepend(responses[1]);
        } else {
            $("#end").prepend(responses[2]);
        }
    }
    
    
        /* Clears current question */
    function clearQuestion() {
        console.log("clearQuestion ran");
        if (questionNumber > 0) {
            $("#question img").remove();
            $("#question p").remove();
            $("#answer1 b").empty();
            $("#answer2 b").empty();
            $("#answer3 b").empty();
        }
    }
    
       /* Gets the next question data from the questions array */
    function showNextQuestion() {
        console.log("showNextQuestion ran");
        console.log("showNextQuestion thinks questionNumber is " + questionNumber);
        /*Adds new content*/
        var currentQuestion = questions[questionNumber];
        $("#question").prepend(currentQuestion.question);
        $("#question").prepend(currentQuestion.illus);
        $("#answer1").text(currentQuestion.choices[0]);
        $("#answer2").text(currentQuestion.choices[1]);
        $("#answer3").text(currentQuestion.choices[2]);
        showQuestionNumber();
    }

        /* Gets quiz result and shows #end */
    function showEnd() {
        console.log("showEnd ran");
        getResult();
        $("#topright").hide();
        $("#gamecontents").hide();
        $("#end").show();
    }

            /* Control function for whether game is over */
    function gameOverControl() {
        console.log("gameOverControl ran");
        if (questionNumber >= total) {
            $("#gamecontent").hide();
            showEnd();
        } else {
            clearQuestion();
            showNextQuestion();
        }
    }
    
        /* Checks to see if answer correct. Number of correct answers update */
    function controlAnswer(answer) {
        console.log("controlAnswer ran");
        var currentQuestion = questions[questionNumber];
        if (answer === currentQuestion.answer) {
            correct += 1;
            console.log("User picked correct answer");
        }
        console.log("Correct: " + correct);
    }
    
    /* I declare the main game function */
    function game() {
        console.log("Main game function ran");
        /* I hide the initial screen */
        $("#start").hide();
        /* I show the Play again and game info plus the first question*/
        gameInfoReset();
        $("#top").show();
        $("#gamecontent").show();
        showNextQuestion();
        
        /* I define function for what happens when users clicks possible answer */
        $("button").click(function () {
            $(this).focusout();
            console.log("Answer button was clicked");
            controlAnswer($(this).text());
            questionNumber += 1;
            console.log("Question no. now: " + questionNumber);
            gameOverControl();

        });
    }
    
    /* When the play button is clicked, game starts */
    $("#startgame").click(function () {
        game();
    });
    
    /*When the user chooses a new game, page is reloaded */
    $("#playagain").click(function () {
        location.reload();
    });
    
    

});