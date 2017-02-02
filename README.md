# number-guesser

Want to play a game? Can you guess the number your computer is thinking of? Why not, it shouldn't be that hard!

In this project, I have developed a brief game that enables users to attempt to guess a random number from the computer. The computer generates an initial random number from 0 to 100. Using the input box, a user can guess what number they think the computer has stored. If it is wrong, the web page will display a message, indicating if the user was too high, or too low. If the user inputs a value that isn't a number, the webpage displays a message asking the user to enter in a numerical value. If the user enters in a value above the current range, the page displays a message encouraging the user to input a value within the displayed range.

If the user guesses the right number, then BOOM! The user has successfully guessed the right stored value. From here, a user can choose to reset the game back to the original state, or, embark on a newer challenge. This time, the list of potential values stretches from 10 minus the original minimum value, and 10 plus the original maximum value. Every time the user guesses the right number and proceeds to the next challenge, the game subtracts another 10 from the minimum, and adds another 10 to the maximum. 
