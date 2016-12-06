var state = {
	questionsArray: [
	'Q1 What was the treaty that ended WWI that laid some of the unrest that would later explode into WWII?',
	'Q2 Hitler became the essential dictator of Germany in which decade?',
	'Q3 What war during the 1930s greatly influenced the development of military tactics that were used in WWII?',
	'Q4 What was the last major attempt at a peaceful resolution with Germany prior to the outbreak of WWII?',
	'Q5 What event began World War II?',
	],
	choicesArray: [
	['Geneva Conference', 'Treaty of Versailles', 'Paris Peace Accords', 'Treaty of Brest-Litovsk'],
	['1920s', '1950s', '1940s', '1930s'],
	['The Spanish-American War', 'The Boer War', 'The Spanish Civil War', 'The Korean War'],
	['The Munich Conference', 'The 1936 Olympic Conferences', 'The Washington Naval Conference', 'The Geneva Convention'],
	['Pearl Harbor', 'Assassination of Arch Duke Ferdinand', 'Invasion of Poland', 'Battle of Britain'],
	],
	answersArray: [2, 4, 3, 1, 3,],
	answerCorrect: 'Correct answer!',
	answerIncorrect: 'Oops. That is not the correct answer',
	questionNumber: 0
};

// State modification functions
function modifyState (value) {
    value++;
    return value;
};

//function to render question and choices
function listQuestion(number) {
	$('.js-question-class').html('<h3>' + state.questionsArray[number] + '</h3>');
			
		for (var k=0; k<state.choicesArray[number].length; k++) {
			$('.js-choices-class').append('<input type="radio" name="choice" value="' + (k + 1) + 
				'" id="choice"><label for="choice">' + state.choicesArray[number][k] + '</label><br/>')
		}
		$('.js-submit-class').html('<form><button type="submit">Submit</button></form>');
	$('.js-question-count-class').html('<p>Question: ' + (number + 1) + ' of 5</p>');
	
//	return radio input value
}
// Event Listener start quiz
$('.js-start-button-class').on('click', 'button', function(event) {
    event.preventDefault();
    listQuestion(state.questionNumber);
    $('.js-start-button-class').addClass('hidden');
});


$('.js-submit-class').submit(function(event) {
	event.preventDefault();
	if ((state.questionNumber + 1) < state.questionsArray.length) {
		$('.js-choices-class').html('');
		state.questionNumber++;
		listQuestion(state.questionNumber);
	} else {
	//	Hide divs no longer relevant. New screen that gives score and "play again button"	
	}
});





