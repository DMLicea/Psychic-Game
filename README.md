# Psychic-Game

* The Psychic Game is a project meant to test the coder's knowledge of Javascript. It is formatted as a game between the computer and the user. 

* The computer randomly selects a letter of the alphabet and the user has 10 tries to attempt to guess the letter.

* A correct guess before using all 10 guesses gains the user a win, and conversely, an inability to correctly guess the letter before using all 10 guesses gains the user a loss.

* This game does use some HTML and CSS, but the main focus is on Javascript.

* I assigned variables to all the important parts of the game - such as wins, losses, guesses left, user guesses so far, the letters the computer was allowed to select, and the computer's guess. 

* I used the getElementById method to get an additional 4 elements based on the first 4 variables to create 4 new variables.

* The "results" function I made used those 4 new variables with textcontent properties in conjuction with span tags  in the HTML in order to create dynamically updating tallys of the users scores and guesses.

* I used an OnKeyUp event to make the user's guesses dependent on which key they pressed.

* Within the OnKeyUp event I created two if statements and one else statement to determine what would happen if the user guessed correctly, what would happen if the user guessed incorrectly, and what would happen if the user's guesses dropped to 0.


