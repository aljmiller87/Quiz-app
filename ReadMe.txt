var state = {};

var questionsArray = [];
	questionsArray[0] = “string for question 1”;
	questionsArray[1] = “string for question 2”;
	questionsArray[2] = “string for question 3”;
	… 
	questionsArray[9] = “string for question 10”;

var choicesArray = []
	choicesArray[0] = [“choice 1”, “choice 2”, “choice 3”, “choice 4”]; (for question 1)
	choicesArray[1] = [“choice 1”, “choice 2”, “choice 3”, “choice 4”]; (for question 2)
	…
	choicesArray[9] = [“choice 1”, “choice 2”, “choice 3”, “choice 4”]; (for question 10)


var answers = [];
	answers[0] = “choice1”; (will be same string as whatever choice is answer)
	answers[1] = “choice4”;
	…
	answers[9] = “choice2”;

how about radio buttons for choices?

function listQuestions() {
	for (var i=0; i<questionsArray.length; i++) {
		$(‘questionDiv’).append(‘<p>’ + questionsArray[i] + ‘</p>’);
		for (var k=0; k<4 (or choicesArray.length); k++) {
			$(‘choicesDiv’).append(radio button choices[i][k])
		}
	}
	eventlistener for radio button selected (this will need to call new function)
}

