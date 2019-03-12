$(document).ready(function () {

    // Declare Variables
    var time=81;
    var intervalId;
    var correct = 0;
    var wrong = 0;
    var unAnswered = 0;
    var winAudio = document.getElementById("win");
    var loseAudio = document.getElementById("lose");

    // Create array of question objects
    var triviaQuestions = [
        {
            question: "Who is the main villain in Final Fantasy VI?",
            answers: ["Sepheroth", "Golbez", "Garland", "Kefka"],
            correctAnswer: "4"
        },

        {
            question: "In Final Fantasy IV, who does Cecil need to fight in order to become a Paladin?",
            answers: ["Kain", "Himself", "Zeromus", "Bahumut"],
            correctAnswer: "2"
        },

        {
            question: "What character name can be found in almost all Final Fantasy games?",
            answers: ["Cid", "Terra", "Titus", "Zidane"],
            correctAnswer: "1"
        },

        {
            question: "Which Final Fantasy game was the first multiplayer?",
            answers: ["XV", "XIII", "XI", "XIV"],
            correctAnswer: "3"
        },

        {
            question: "Who was Squall's main rival in Final Fantasy VIII?",
            answers: ["Cloud", "Seifer", "Yang", "Rinoa"],
            correctAnswer: "2"
        },

        {
            question: "What's the main mode of travel across all Final Fantasy games?",
            answers: ["Chocobo", "Ostrich", "Bike", "Car"],
            correctAnswer: "1"
        },

        {
            question: "Which main character has a tragic death scene in Final Fantasy VII?",
            answers: ["Tifa", "Biggs", "Wedge", "Aeris"],
            correctAnswer: "4"
        },

        {
            question: "In Final Fantasy X, which city is Titus from?",
            answers: ["Luca", "Besaid", "Zanarkand", "Bevelle"],
            correctAnswer: "3"
        },

        {
            question: "Who is the Archfiend of Earth in the first Final Fantasy?",
            answers: ["Marilith", "Scarmiglione", "Lich", "Tiamat"],
            correctAnswer: "3"
        },

        {
            question: "In Final Fantasy IX, who is the Black Mage?",
            answers: ["Vivi", "Stella", "Zok", "Gungho"],
            correctAnswer: "1"
        },

        
    ];

    //------------------------ Buttons ------------------------

    // The click event for the button to start the trivia game
    $("#start-trivia").on("click", function () {
        $("#start-button").hide();
        $("#finish-button").show();
        $("#time-text").show();
        $("#timer").show();
        displayQuestions();
        startTimer();
        
    });

     // The click event to end the game
     $("#stop-trivia").on("click", function () {
        console.log("The finish button was clicked")
        stopTimer();
        endGame();
        hide();

    });

     // The click event to reset the game
     $("#retry-trivia").on("click", function () {
        console.log("The retry button was clicked")
        retry();
        displayQuestions();
        startTimer();
    });

    //------------------------ Buttons ------------------------

    
    // Function to show/hide appropriate elements and reset the time and score
    var retry = function() {
        $("#question-area").show();
        $("#finish-button").show();
        $("#time-text").show();
        $("#timer").show();
        $(".cloud").hide();
        $(".kefka").hide();
        $("#results-header").hide();
        $("#correct").hide();
        $("#wrong").hide();
        $("#unanswered").hide();
        $("#correct-number").hide();
        $("#wrong-number").hide();
        $("#retry-button").hide();
        $("#question-area").empty();
        loseAudio.pause();
        loseAudio.currentTime = 0;
        winAudio.pause();
        winAudio.currentTime = 0;
        time=81;
        correct = 0;
        wrong = 0;
        unAnswered = 0;
    };

    
    // Function to hide certain elements
    var hide = function() {
        $("#finish-button").hide();
        $("#timer").hide();
    };
   
    // Function to start the for loop and display trivia questions. 
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
    };
    
    // Function to display results page.
    var results = function() {
        $("#results-header").show();
        $("#correct").show();
        $("#wrong").show();
        $("#unanswered").show();
        $("#correct-number").show();
        $("#wrong-number").show();
        $("#correct-number").html("<h4>" + ": " + correct + "</h4>")
        $("#wrong-number").html("<h4>" + ": " + wrong + "</h4>")
        // $("#unanswered-number").html("<h4>" + ": " + unanswered + "</h4>")
        $("#retry-button").show();
        if (correct >=7) {
            $(".cloud").show();
            winAudio.play();
        }
        else {
            $(".kefka").show();
            loseAudio.play();
        }
    }
   
    // Function to check if selections are correct or wrong.
    var rightWrong = function() {

        for (var i = 0; i < triviaQuestions.length; i++) {
            if ($("input[name="+i+"]:checked").val() == triviaQuestions[i].correctAnswer) {
                console.log("Correct");
                correct++;
                }
            // Working on a way to check if there is an unanswered question
            // else if ($("input[name="+i+"]:checked").val()) {
            //     console.log("unAnswered");
            //     unAnswered++;
            // }
            
            else {
                console.log("Wrong");
                wrong++;
            }
        };
        console.log("Number of correct answers: " + correct);
        console.log("Number of wrong answers: " + wrong);
        // console.log("Number of unanswered: " + unAnswered);
        return(correct, wrong, unAnswered)
    };


    //---------Timer----------------//
    // Function to start timer
    var startTimer = function() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    };
    
    // Displays the timer in the HTML and decrements the time value by 1 second.  
    // Once time is 0 the timer stops.
    var decrementTimer = function() {
        
        time--;
        $("#timer").html("<h3>" + time + "</h3><hr>")
        if (time === 0) {
            stopTimer();
            endGame();
        }
    };

    // Function to stop the timer
    var stopTimer = function() {
        clearInterval(intervalId);
    };
    //---------Timer----------------//

    // Function to clear the screen of questions
    var clearQuestions = function() {
        $("#question-area").hide();
        $("#timer").hide();
        $("#time-text").hide();
        $("#finish-button").hide();
    };
    
    // Create a finish function that will display the number of correct and wrong answers.  This will be called
    // by the finish button or when the time runs out.
    var endGame = function() {
        rightWrong();
        clearQuestions();
        results();
    };
});