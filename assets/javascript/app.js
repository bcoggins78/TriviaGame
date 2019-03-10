$(document).ready(function () {

    // Declare Variables

    // Create array of question objects
    var triviaQuestions = [
        {
            question: "This is question 1?",

            answers: {

                a: "Answer 1",
                b: "Answer 2",
                c: "Answer 3",
                d: "Answer 4"
            },

            correctAnswer: "d"
        },

        {
            question: "This is question 2?",

            answers: {

                a: "Answer 1",
                b: "Answer 2",
                c: "Answer 3",
                d: "Answer 4"
            },

            correctAnswer: "b"
        },

        {
            question: "This is question 3?",

            answers: {

                a: "Answer 1",
                b: "Answer 2",
                c: "Answer 3",
                d: "Answer 4"
            },

            correctAnswer: "a"
        },
    ];

    // Function to remove the start button and start the for loop to display trivia questions / answers. 
    var displayQuestions = function () {
        $("button").remove();

        var questionDiv = $("#question-area");

        for (var i = 0; i < triviaQuestions.length; i++) {

            var pQuestions = $("<h4>" + triviaQuestions[i].question + "</h4>");
            var rChoice1 = $("<input type='radio' name=" + i + " value=" + i + ">" + triviaQuestions[i].answers.a + "</input><br>")
            var rChoice2 = $("<input type='radio' name=" + i + " value=" + i + ">" + triviaQuestions[i].answers.b + "</input><br>")
            var rChoice3 = $("<input type='radio' name=" + i + " value=" + i + ">" + triviaQuestions[i].answers.c + "</input><br>")
            var rChoice4 = $("<input type='radio' name=" + i + " value=" + i + ">" + triviaQuestions[i].answers.d + "</input><br><br><hr>")

            $(questionDiv).append(pQuestions, rChoice1, rChoice2, rChoice3, rChoice4);
        }
    };

    $("#start-trivia").on("click", function () {
        startTimer()
        displayQuestions()


    });

    // Start timer
    var startTimer = function() {

        setTimeout(1000*30)

    }


    // Player selects an answer for each question

    // Create a way to test if an answer has already been selected so the player can't select multiple answers

    // Create a finish function that will display the number of correct and wrong answers.  This will be called
    // by a button or when the time runs out.
});