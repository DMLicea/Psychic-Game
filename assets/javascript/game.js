
// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var userGuessSoFar = []
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var yourWin = document.getElementById("wins");
var yourLose = document.getElementById("loses");
var yourGuessesLeft = document.getElementById("guessesLeft");
var guessSoFar = document.getElementById("guessSoFar");


console.log(computerGuess)
console.log(yourWin)
console.log(yourLose)
console.log(wins)
console.log(loses)

function results() {
    yourWin.textContent = wins;
    yourLose.textContent = loses;
    yourGuessesLeft.textContent = guessesLeft;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  }


function generateLetter() {

    console.log (computerGuess)
}

document.onkeyup = function(event) {
var userGuess = event.key;
    userGuessSoFar.push(userGuess);
guessSoFar.textContent = userGuessSoFar;


if (userGuess == computerGuess) {
 wins++;
 guessesLeft = 10;
 userGuessSoFar = []
 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

else {
    guessesLeft--;



}

    
if (guessesLeft == 0) {
loses++;
guessesLeft = 10;
userGuessSoFar = [];
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
results();
generateLetter();


}
results();
generateLetter();

}
results();
generateLetter();



/* Psychic Game Pseudocode

1. User chooses letter on their keyboard.

2. Computer chooses a random value in a list of computerChoices.

3. We determine if the user is correct or not.

* If user and computer pick the same letter then user wins, and both "Guesses So Far" and "Guesses Left" resets.

* If user and computer pick a different letter, then the "Guesses Left" goes down by one, 
and the user's guess appears under "Guesses So Far."

* If user uses ten guesses without winning, they lose, and "Guesses So Far" and "Guesses Left" resets.

4. We then add to their score.

* If user wins then their Wins increase by one.
* If user loses then their Loses increase by one.
    

5. The user then presses a letter to play again.
*/