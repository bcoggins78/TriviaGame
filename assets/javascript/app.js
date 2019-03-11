$(document).ready(function () {

    // Declare Variables
    var time=12;
    var intervalId;
    var correct = 0;
    var wrong = 0;
    var unAnswered = 0;

    // Create array of question objects
    var triviaQuestions = [
        {
            question: "This is question 1?",

            answers: ["Q1 Answer 1", "Q1 Answer 2", "Q1 Answer 3", "Q1 Answer 4"],

            correctAnswer: "4"
        },

        {
            question: "This is question 2?",

            answers: ["Q2 Answer 1", "Q2 Answer 2", "Q2 Answer 3", "Q2 Answer 4"],

            correctAnswer: "2"
        },

        {
            question: "This is question 3?",

            answers: ["Q3 Answer 1", "Q3 Answer 2", "Q3 Answer 3", "Q3 Answer 4"],

            correctAnswer: "1"
        },
    ];






    // The click event for the button to start the trivia game
    $("#start-trivia").on("click", function () {
        $("button").remove();
        displayQuestions();
        startTimer();
        
    });


    



    // Function to remove the start button and start the for loop to display trivia questions. 
     var displayQuestions = function () {
        

        var questionDiv = $("#question-area");

        for (var i = 0; i < triviaQuestions.length; i++) {

            var hQuestions = $("<h4>" + triviaQuestions[i].question + "</h4>");
            var rChoice1 = $("<input type='radio' name=" + i + " value=1>" + triviaQuestions[i].answers[0] + "</input><br>")
            var rChoice2 = $("<input type='radio' name=" + i + " value=2>" + triviaQuestions[i].answers[1] + "</input><br>")
            var rChoice3 = $("<input type='radio' name=" + i + " value=3>" + triviaQuestions[i].answers[2] + "</input><br>")
            var rChoice4 = $("<input type='radio' name=" + i + " value=4>" + triviaQuestions[i].answers[3] + "</input><br><br><hr>")

            $(questionDiv).append(hQuestions, rChoice1, rChoice2, rChoice3, rChoice4);
            
            
        }

        var finishBtn = $("<button>");
        finishBtn.addClass("btn btn-success justify-content-center");
        finishBtn.text("Finished");
        $(questionDiv).append(finishBtn);

        
    }
        
    
        
        
    
    
    // Function to check if selections are correct or wrong.
    var rightWrong = function() {

        for (var i = 0; i < triviaQuestions.length; i++) {

            if ($("input[name="+i+"]:checked").val() == triviaQuestions[i].correctAnswer) {
                console.log("Correct");
                correct++;
                }
            
            else {
                console.log("Wrong");
                wrong++;
            }
        };
        
        return(correct, wrong)
    }


    //---------Timer----------------//
    // Function to start timer
    var startTimer = function() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    }
    
    // Displays the timer in the HTML and decrements the time value by 1 second.  
    // Once time is 0 the timer stops.
    var decrementTimer = function() {
        
        time--;
        $("#timer").html("<h3>" + "Time remaining: " + time + "</h3>")
        if (time === 0) {
            stopTimer();
            endGame();
        }
    }

    // Function to stop the timer
    var stopTimer = function() {
        clearInterval(intervalId);
    }
    //---------Timer----------------//

    
    
    // Create a finish function that will display the number of correct and wrong answers.  This will be called
    // by a button or when the time runs out.
    var endGame = function() {
        rightWrong()
        // ("#question-area").remove();
        var allDone = $("<h3>All Done!</h3>");
        


    }
});