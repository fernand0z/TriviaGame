$(document).ready() 

//A variable to hold the timer allotment
var number = 30;  

//A variable to hold the current timer value
var counter = setInterval(timer, 1000);

//Variables to record and tally correct, incorrect, unanswered questions
var correct = 0;
var incorrect = 0;
var totalQuestions = 12;
var unanswered = totalQuestions - correct - incorrect;

//The decrement function to countdown from the number variable
function timer()
{
    number--;
    $("#timer").html(number);

    if(number <= 0)
    {
    clearInterval(counter);

    var radios= jQuery("input[type='radio']");
    
    var answeredQuestions = radios.filter(":checked").length;
    var unansweredQuestions = parseInt(totalQuestions) - parseInt(answeredQuestions);
    var answer1 = $('input[name=inlineRadioOptions1]:checked').val(); 
    var answer2 = $('input[name=inlineRadioOptions2]:checked').val();
    var answer3 = $('input[name=inlineRadioOptions3]:checked').val();
    var answer4 = $('input[name=inlineRadioOptions4]:checked').val();
    var answer5 = $('input[name=inlineRadioOptions5]:checked').val();
    var answer6 = $('input[name=inlineRadioOptions6]:checked').val(); 
    var answer7 = $('input[name=inlineRadioOptions7]:checked').val();
    var answer8 = $('input[name=inlineRadioOptions8]:checked').val();
    var answer9 = $('input[name=inlineRadioOptions9]:checked').val();
    var answer10 = $('input[name=inlineRadioOptions10]:checked').val();
    var answer11 = $('input[name=inlineRadioOptions11]:checked').val();
    var answer12 = $('input[name=inlineRadioOptions12]:checked').val();

    //COMMENT OUT THESE CONSOLE.LOGS
    //console.log("Answered: " + radios.filter(":checked").length);
    //console.log("Individual Answers: ");
    //console.log(answer1);
    //console.log(answer2);
    //console.log(answer3);
    //console.log(answer4);
    //console.log(answer5);
    //console.log(answer6);
    //console.log(answer7);
    //console.log(answer8);
    //console.log(answer9);
    //console.log(answer10);
    //console.log(answer11);
    //console.log(answer12);


    //IF ELSE STATEMENTS TO TALLY CORRECT AND INCORRECT
    if (answer1 == 1) {
        correct++;
    }
    else if (answer1 == 0) {
        incorrect++;
    }
    if (answer2 == 1) {
        correct++;
    }
    else if (answer2 == 0) {
        incorrect++;
    }
    if (answer3 == 1) {
        correct++;
    }
    else if (answer3 == 0) {
        incorrect++;
    }
    if (answer4 == 1) {
        correct++;
    }
    else if (answer4 == 0) {
        incorrect++;
    }
    if (answer5 == 1) {
        correct++;
    }
    else if (answer5 == 0) {
        incorrect++;
    }
    if (answer6 == 1) {
        correct++;
    }
    else if (answer6 == 0) {
        incorrect++;
    }
    if (answer7 == 1) {
        correct++;
    }
    else if (answer7 == 0) {
        incorrect++;
    }
    if (answer8 == 1) {
        correct++;
    }
    else if (answer8 == 0) {
        incorrect++;
    }
    if (answer9 == 1) {
        correct++;
    }
    else if (answer9 == 0) {
        incorrect++;
    }
    if (answer10 == 1) {
        correct++;
    }
    else if (answer10 == 0) {
        incorrect++;
    }
    if (answer11 == 1) {
        correct++;
    }
    else if (answer11 == 0) {
        incorrect++;
    }
    if (answer12 == 1) {
        correct++;
    }
    else if (answer12 == 0) {
        incorrect++;
    }
    
    //DELETE THESE CONSOLE.LOGS AFTER DEBUGGING
    //console.log("Correct: " + correct);
    //console.log("Incorrect: " + incorrect);
    //console.log("Unanswered: " + unansweredQuestions);
    
    
    // UPDATE PAGE WITH TOTALS DATA
    $("#totals").html("<h1>" + "All done!" + "</h1>" + "<p><h2>" + "Correct Answers:  " + correct + "</h2></p>" + "<p><h2>" + "Incorrect Answers:  " + incorrect + "</h2></p>" + "<p><h2>" + "Unanswered:  " + unansweredQuestions + "</h2></p>");
};
};

timer();