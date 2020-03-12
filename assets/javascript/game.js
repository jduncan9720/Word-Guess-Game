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
    if (word.includes(letter)) {
        var position = word.indexOf(letter);
        while (position != -1){
            answerArray[position] = letter;
            var result = answerArray.join(' ');
            document.getElementById('currentWord').innerHTML = result;
            position = word.indexOf(letter, position + 1);
        }
        if (!answerArray.includes("_")){
            winGame();
        }
    }
    else{
        if(!wrongArray.includes(letter)){
            wrongArray.push(letter);
            document.getElementById('lettersGuessed').innerHTML = wrongArray;
            loseLife();
        }
    }
}

function loseLife() {
    lives--;
    document.getElementById('guessesRemain').innerHTML = lives;
    if (lives == 0) {
        document.getElementById('currentWord').innerHTML = "YOU LOSE!..PLAY AGAIN?";
        newSetup = "true";
    }
}

function winGame() {
    document.getElementById('currentWord').innerHTML = "YOU WIN!..PLAY AGAIN";
    wins++;
    document.getElementById('winsTotal').innerHTML = wins;
    newSetup = "true";
    if (word == "goose") {
        document.getElementById("image").src = "assets/images/goose.jpg";
    }
    else if(word == "ethan"){

    }
}
