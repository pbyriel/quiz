/* 
Indsæt spørgsmål: spørgsmålsnummer, spørgsmål, korrekt svar, billede.
Finish getResult
showNextQuestion
controlAnswer
*/

$(document).ready(function () {
    /* I declare variables */
    var questions = [], responses = [], answers, correct, wrong, total, questionNumber; 

    /* I declare some helper function */
        /* Shows current question number */
    function showQuestionNumber() {
        $("#question_number b").text(questionNumber);
    }
            
        /* I initialize the game variables and show the             total number of questions*/
    function gameReset() {
        console.log("gameReset ran");
        total = questions.length;
        answers = 0;
        correct = 0;
        questionNumber = 1;
        showQuestionNumber();
        $("#total_questions b").text(total); 
    }

        /* Puts number of right and wrong answers and shows appropriate response dep. */
    function getResult() {
        console.log("getResult ran");
        $("#end_total_right b").text(correct);
        wrong = total - correct;
        $("#end_total_wrong b").text(wrong);
        /*Percentage triggers response*/
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
    function showNextQuestion() {
        console.log("showNextQuestion ran");
    }
    
    function controlAnswer() {
        console.log("controlAnswer ran");
        /* Checks to see if answer correct
        /* Number of corretc answers update */
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
            controlAnswer($(this));
            questionNumber++;
            gameOverControl();
        });
    }
    /* When one of the .play buttons is clicked, game starts */
    $(".play").click(function () {
        console.log("Play was clicked");
        game();
    });
    
    
    
    
    
});