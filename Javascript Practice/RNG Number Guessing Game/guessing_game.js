var min = 25;
var max = 100;
var guesses = 0;
var user_guess_text;
var user_guess;
var target;
var finished = false;

function play_game() {
	console.log("playing game...");

	var game_min = Math.floor(Math.random() * (min + 1));
	var game_max = Math.floor(Math.random() * (max + 1));
	console.log("minimum number is " + game_min + ".");
	console.log("maximum number is " + game_max + ".");

	target = Math.floor(Math.random() * (game_max + 1));
	console.log("target: " + target)

	while (game_min == game_max || 
				(game_min > game_max) ||  
				(game_min == 0 || game_max == 0) || 
				(game_max - game_min) == 1) {
		game_min = Math.floor(Math.random() * (min + 1));
		game_max = Math.floor(Math.random() * (max + 1));
		console.log("new minimum number is " + game_min + ".");
		console.log("new maximum number is " + game_max + ".");
	}

	while (target <= game_min || target >= game_max) {
		target = Math.floor(Math.random() * (game_max + 1));
		console.log("new target: " + target);
	}

	console.log("final minimum number: " + game_min);
	console.log("final maximum number: " + game_max);
	console.log("final target number: " + target);

	while (!finished) {
		user_guess_text = prompt("I am thinking of a number between " + game_min + " and " + game_max + ".\n\n" + "What is the number?");
		user_guess = parseInt(user_guess_text);

		guesses += 1;
		console.log("guess #" + guesses);
		finished = check_guess(game_min, game_max);
	}
}

function check_guess(game_min, game_max) {
	if (isNaN(user_guess)) {
		alert("Enter a number!");
		console.log("user input of " + user_guess_text + " for guess #" + guesses + " is NaN");
		return false;
	}

	if (user_guess < game_min || user_guess > game_max) {
		alert("Wrong range! (" + game_min + " - " + game_max + ")");
		console.log("user input of " + user_guess + " for guess #" + guesses + " is in the wrong number range of " + game_min + "-" + game_max + ".");
		return false;
	}

	if (user_guess < target) {
		alert("Too low!");
		console.log("user input of " + user_guess + " for guess #" + guesses + " is less than the target of " + target);
		return false;
	}

	if (user_guess > target) {
		alert("Too high!");
		console.log("user input of " + user_guess + " for guess #" + guesses + " is greater than the target of " + target);
		return false;
	}

	alert("You got it!  The number was " + target + ".\n\nIt took you " + guesses + " guess(es) to get the number.");
	console.log("user has correctly guessed the target of " + target + " after " + guesses + " guess(es).");
	console.log("game has ended")
	return true;
}
