//Global Variables to Access Anywhere
var newSetup = "true";
var word;
var answerArray;
var wrongArray;
var lives;
var wins = 0;

//On keyup, set up game or run check letter function
document.onkeyup = function newWord(event)
{
    //Get the letter from the event
    var letter = event.key.toLowerCase();

    //If the game has already started, check the letter, otherwise
    //Start a new game
    if(newSetup == "false"){
        //Run the wordCheck function with letter as the parameter
        wordCheck(letter);
    } 
    else{
        //Create an array of words to eventually pick a word
        var words = [
            "horse",
            "falcon",
            "monkey",
            "goose",
            "hamster",
            "tortoise"
        ];
        
        //Pick a random word from the array above
        word = words[Math.floor(Math.random() * words.length)];

        //Reset every variable to its starting values
        lives = 10;
        answerArray = [];
        wrongArray = [];

        //Generate the Underscores for the current word
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        
        //Get rid of the commas and assign it to the new result variable
        var result = answerArray.join(' ');

        //Display all the updated things
        document.getElementById('currentWord').innerHTML = result;
        document.getElementById('guessesRemain').innerHTML = lives;
        document.getElementById('lettersGuessed').innerHTML = wrongArray;

        //Change newSetup to false to ensure a new word isn't chosen each time
        newSetup = "false";
    }
}

//Checks the letter and updates if it is in the given word.
function wordCheck(letter) {
    //Check if the word contains any instance of the letter
    if (word.includes(letter)) {
        //Find the first instance of the letter occuring in the word
        var position = word.indexOf(letter);

        //While there are instances of the letter remaining, update the display
        while (position != -1){
            answerArray[position] = letter;
            var result = answerArray.join(' ');
            document.getElementById('currentWord').innerHTML = result;
            position = word.indexOf(letter, position + 1);
        }

        //If all the _ have been replaced, win the game.
        if (!answerArray.includes("_")){
            winGame();
        }
    }
    else{
        //We know the letter is not in the word, check if it's been processed before
        if(!wrongArray.includes(letter)){
            wrongArray.push(letter);
            document.getElementById('lettersGuessed').innerHTML = wrongArray;
            loseLife();
        }
    }
}

//Lose a single life, if you are at zero, lose the game
function loseLife() {
    lives--;
    document.getElementById('guessesRemain').innerHTML = lives;
    if (lives == 0) {
        document.getElementById('currentWord').innerHTML = "YOU LOSE!..PLAY AGAIN?";
        newSetup = "true";
    }
}

//Win the game and show a picture
function winGame() {
    document.getElementById('currentWord').innerHTML = "YOU WIN!..PLAY AGAIN?";
    wins++;
    document.getElementById('winsTotal').innerHTML = wins;
    newSetup = "true";
    
    //Find the associated picture with the win.
    if (word == "goose") {
        document.getElementById("image").src = "assets/images/goose.jpg";
    }
    else if(word == "horse"){
        document.getElementById("image").src = "assets/images/goose.jpg";
    }
    else if(word == "falcon"){
        document.getElementById("image").src = "assets/images/goose.jpg";
    }
}
