$(document).ready(function(){
    $("#submit").hide();
    $(".questions").hide();
});

// Global Variables.

var correctAnswers= 0;
var wrongAnswers= 0;
var unanswered = 0;

var timeLeft = 60;
var intervalId;

// Functions & Variables.


var startButton = function (){
    // Makes sure start button spam doesn't break the timing.
    clearInterval(intervalId);

    //Set interval to continuously decrement time.
    intervalId = setInterval(decrement, 1000);

    // Hides start Button.
    $("#start").remove();

    // Show submit button
    $("#submit").show();

    // Show the questions.
    $(".questions").show();

    setInterval(finishButton, 1000* 60);


};  

var finishButton = function (){
    //Stops.
    clearInterval(intervalId);
    
    // Removes Timer
    $("#timer").hide();

    // Removes quiz HTML.
    $(".questions").remove();

    // Removes the Finish Button.
    $("#submit").hide();

    // Display Results function.
    displayResults();

};


// Functions


 //  The decrement function.
 function decrement() {

    //Goes down every second.
    timeLeft--;

    //  Show the number in the #show-number tag.
    $("#timer").html("<h2> You have " + timeLeft + " more seconds left!</h2>");

    //Starts 60 second timer. Will click finish button automatically if time runs out.
    //setInterval(finishButton, 1000* 2);

    if (timeLeft === 0){
        finishButton();
    }

 };


function displayResults(){

    $("#scores").show();
    
    // Displays new HTML scores.
    $("#scores").html("<span> Correct Answers: " + correctAnswers + "</span> <br>");
    $("#scores").append("<span> Incorrect Answers: " + wrongAnswers + "</span><br>");
    $("#scores").append("<span> Unanswered Questions: " + unanswered + "</span>");

};

// Start Button. Starts timer and displays questions.
$("#start").on("click", function() {
    startButton();

});

$("#submit").on("click", function() {
    finishButton();
    clearInterval(intervalId);
    

});

