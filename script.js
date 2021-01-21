
$(document).ready(function() 
{
	var magic8Ball = {};
	
	$('#answer').hide();
    
	magic8Ball.answers = ['Definitely!', 'With in time', 'Be Patient', 'No answer right now', 'Not the way', 'Definitely no', 'Possibly', 'Maybe', 'Absolutely', 'Signs point to yes'];
	

	magic8Ball.theQuestion = function(question) {
		
     $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
		
	$('#answer').fadeIn(4000);

	  var randomNumber = Math.random();
	  var randomAnswer = randomNumber * this.answers.length;
	  var randomIndex = Math.floor(randomAnswer);
	  var theAnswer = this.answers[randomIndex]; 

      $('#answer').text(theAnswer);
	  console.log(question);
	  console.log(theAnswer);
    };
	
	
	var onClick  = function() {
		$('#answer').hide();
		
		$('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png');

	setTimeout ( function() {
	
		$('#8ball').effect('shake'); 
	var question = prompt('Ask a Yes/No question!');
	magic8Ball.theQuestion(question)
	},
	500);
	};
	$('#questionButton').click(onClick);			 
}

);
