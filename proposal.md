
*** Militsa / 07/11/2017 ***

[Hangman Game] Proposal

What is [name of game]? Hangman - 
I loved this game , when I was a child, I was looking to choose something that I have some expirience with. 
I am not a gamer so It was not really easy for me , but I think I am happy with the game I choose.Actually 
I love it I have a lot of extra functionality I want to include...I am So excited.

Wireframe

Initial thoughts on game structure Challenge will be definitly making the arrays , 
I will need 2 to campare the input and the words , that I have memorized in the game. 
Also I want to make every time when somebody chooses a wrong letter X to appear over the empty space for the words , 
and also all the letters that are not matching to appear on the page.I hope I will be able to make the functions afficiont and the code dry . 
If I have some time i would like to try do the game in JQuery :).Also at the end of the game I want to make a picture of hangman appear
if the player loses the game.

Phases of Completion 1)Input fild,submit button, 
4 boxes for the "X"-wrong answers,div-for the letters that do not match. 
2)Event listener for the submit button 
3)array-2 withb math.random for the one containing the words, the other one is for the input
4)compare the arrays and sort the letters -small 
5)if the letter match will appear on the screen,if not X will appear, and the wrong letter.
6)if the player guesses 1 letter that is twice at the game, they all appear. 
7)it he win - alert, if he loses - alert and the word is going to appear. 
8) clear() the page Links and Resources I picked the game the last minute, so I haven't really look for information, but probably tmm.

(Anything you've looked up so far or are thinking about using.)
API Training Shop Blog About
© 2017 GitHub, Inc. Help Support


ps js:
1)  make an array and get a random word from tha array;
2)  split the word, and make the letter hidden 
3) take the letter the user passes and store it to a variable
4) compare the letters with the letters of the word (wrap this in a function and make an if statement )
5) If the word matches - we are - going to show the letter(visible/invisible)visibility -visible ,
it it does not show the word with the container with wrong gueses 
string.uppercase
5) It the uncorrect guess matches the max number of the wrong guesses , make an alert 
6) It the plaey guess the word - 
    if all the letters are visible then the game is done - show an alert 
    if the letters of the input are and the length of the word =  to the word from the array that we have , then the player wins 
7) clear the page 
