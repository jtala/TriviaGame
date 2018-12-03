// Global Variables.

var correctAnswers= 0;
var wrongAnswers= 0;
var unanswered = 0;

var timeLeft = 60;

var quizQuestions;
var intervalId;

// Functions & Variables.


var startButton = function (){
    // Hides start Button.
    $("#start").remove();

    //Starts 60 second timer.
    setInterval(finishButton, 1000* 6);

    //Decrement Time
    timeLeft --;




    //Displays timer to the user.
    $("#timer").text("You have: " + timeLeft + " seconds left!");

    // Replace HTML with the quizzes' questions.
    $(".questions").append(quizQuestions);

    // Show the submit Button
    $("#submit").show();
}  


var finishButton = function (){
    // Takes all the inputs assign point accordingly.

    // Removes Timer
    $("#timer").remove();

    // Removes quiz HTML.
    $(".questions").remove();

    // Displays new HTML results.
    $("#results").html("<span> Correct Answers: " + correctAnswers + "</span> <br>");
    $("#results").append("<span> Incorrect Answers: " + wrongAnswers + "</span><br>");
    $("#results").append("<span> Unanswered Questions: " + unanswered + "</span>");


}

// Functions

function startQuiz(){

    console.log("Hi");

    // Start a minute timer.
    setTimeout(finishButton, 1000* 60);

    //Display it in front of the user.
    $("#timer").html ("You have: " + timeLeft  + " seconds left!");

    // Replace HTML with the quizzes' questions.
    $(".questions").html(quizQuestions);
    
};

function displayResults(){
    // on Results.

    // Display You have finished,

    // Show correct answers.

    // Show incorrect answers.



}






// Start Button. Starts timer and displays questions.
$("#start").on("click", function() {
    startButton();


});



// Finish Button to display the results.

$("#submit").on("click", function(){


});


