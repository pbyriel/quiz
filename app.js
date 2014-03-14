/* 
Indsæt spørgsmål: spørgsmålsnummer, spørgsmål, korrekt svar, billede.
*/

$(document).ready(function () {
    
    /* I declare variables */
    var questions = [], responses = [], correct, total, questionNumber;
    questions[0] = {question: "<p>Dr. Moriarty &ndash; Holmes arch nemesis &ndash; and Holmes were said to have killed each other in Switzerland by fighting by and then falling into a forceful, rocky waterfall.<br><br>What might the name be of the waterfall?</p>",
                    answer: "Reichenbach fall",
                    choices: ["Rheinburger fall", "Westfalden fall", "Reichenbach fall"],
                    illus: '<img class="illus" src="images/reichenbach.jpg" alt="picture of waterfall"/>'
                   };
    questions[1] = {};
    questions[2] = {};
    questions[3] = {};
    
    responses[0] = "<h2>Well played, my fellow detective</h2><p> You must be an apprentice of Holmes! Such cunning, such knowledge. Such powers of deduction! Have a pibe, my friend.</p>"
    responses[1] = "<h2>Nicely done</h2><p>My dear friend, you did well, but without overdoing how well. Certainly, you would do even better with more knowledge of Holmes.<p>"
    responses[2] = "<h2>Now, Watson, come again</h2><p>You should go directly to the nearest book store and acquire some Sherlock Holmes novels. Much to see and much to learn.<p>"

    /* I declare some helper function */
        /* Shows current question number */
    function showQuestionNumber() {
        $("#question_number b").text(questionNumber+1);
    }
            
        /* I initialize the game variables and show the             total number of questions*/
    function gameReset() {
        console.log("gameReset ran");
        total = questions.length;
        correct = 0;
        questionNumber = 0;
        showQuestionNumber();
        $("#total_questions b").text(total); 
    }

        /* Puts number of right and wrong answers and shows appropriate response dep. */
    function getResult() {
        console.log("getResult ran");
        $("#end_total_right b").text(correct);
        $("#end_total_wrong b").text(wrong);
        var answer_percent = correct / total;
        var wrong = total - correct;
        if (answer_percent >= 0.67 ) {
            $("end").prepend(responses[0]);
        } else if (answer_percent >= 0.34) {
            $("end").prepend(responses[1]);
        } else {
            $("end").prepend(responses[2]);
        }
    }
    
        /* Gets quiz result and shows #end */
    function showEnd() {
        console.log("showEnd ran");
        getResult();
        $("gamecontents").hide();
        $("#end").show();
    }
        /* Control function for whether game is over */
    function gameOverControl() {
        console.log("gameOverControl ran");
        if (questionNumber === total) {
            $("#gamecontents").hide();
            showEnd();
        } else {
            showNextQuestion();
        }
    }
    
        /* Gets the next question data from the questions array */
    function showNextQuestion() {
        console.log("showNextQuestion ran");
        var currentQuestion = questions[questionNumber]; 
        $("#question").prepend(currentQuestion.question);
        $("#question").prepend(currentQuestion.illus);
        $("#answer1").text(currentQuestion.choices[0]);
        $("#answer2").text(currentQuestion.choices[1]);
        $("#answer3").text(currentQuestion.choices[2]);
    }
    
        /* Checks to see if answer correct. Number of correct answers update */
    function controlAnswer(answer) {
        console.log("controlAnswer ran");
        var currentQuestion = questions[questionNumber]; 
        if (answer == currentQuestion.answer) {
            correct++;
            console.log("User picked correct answer")
            
        }
        console.log("Correct: " + correct);
    }
    
    /* I declare the main game function */
    function game() {
        console.log("Main game function ran");
        /* I hide the initial screen */
        $("#start").hide();
        /* I show the Play again and game info plus the first question*/
        gameReset();
        $("#top").show();
        $("#gamecontent").show();
        showNextQuestion();
        
        /* I define function for what happens when users clicks possible answer */
        $("button").click(function() {
            console.log("Answer button was clicked");
            controlAnswer($(this).text());
            questionNumber++;
            console.log("Question no. now: " + questionNumber);
            gameOverControl();
        });
    }
    /* When one of the .play buttons is clicked, game starts */
    $(".play").click(function () {
        console.log("Play was clicked");
        game();
    });
    
    
    
    
    
});