$(document).ready(function() {

	//variables
	var gemOne;
	var gemTwo;
	var gemThree;
	var gemFour;
	var wins = 0;
	var losses = 0;
	var randomNumber;
	var userScore;

	// Starts variables for each 
	function setUpVariables() {
        
        // Random # in html between 19 & 120
		randomNumber = 19 + Math.floor(Math.random() * 102);
        //set user score to zero
		userScore = 0;
        //gem values are random between 1 & 12
		gemOneValue = 1 + Math.floor(Math.random() * 12);
		gemTwoValue = 1 + Math.floor(Math.random() * 12);
		gemThreeValue = 1 + Math.floor(Math.random() * 12);
		gemFourValue = 1 + Math.floor(Math.random() * 12);
       
		
		// update the text for the game board
		$("#wins-total").text("Wins: " + wins);
		$("#losses-total").text("Losses: " + losses);
		$("#randomNumber").text(randomNumber);
		$("#userScore").text(userScore);
		consoleLogVariables();
	}


	//wins & losses function
	function winOrLose() {
		// loses
		if (userScore > randomNumber) {
			losses++;
			console.log("user lost");
			setUpVariables();
		}

		// wins
		if (userScore === randomNumber) {
			wins++;
			console.log("user won");
			setUpVariables();
		}
	}
	

	

	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOne: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
		console.log("randomNumber: " + randomNumber + " userScore: " + userScore);
		console.log("----------------------------------");

	}

	setUpVariables();

	// on-click for gems
	$(".gem").on("click", function() {
		
		var clickedGem = $(this).attr("value");
        console.log(clickedGem);
        // add the value of the gem to the user's ongoing score tally
        if (clickedGem == "gem1") {
        	userScore += gemOneValue;
        } else if (clickedGem == "gem2") {
        	userScore += gemTwoValue;
        } else if (clickedGem == "gem3") {
        	userScore += gemThreeValue;
        } else if (clickedGem == "gem4") {
        	userScore += gemFourValue;
        } 
		
		$("#userScore").text(userScore);
        consoleLogVariables();
		winOrLose();
	});

});