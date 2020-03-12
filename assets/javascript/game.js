var newSetup = "true";
var word;
var answerArray;
var wrongArray;
var lives;
var wins = 0;
document.onkeyup = function newWord(event)
{
    var letter = event.key.toLowerCase();
   if(newSetup == "false"){
       wordCheck(letter);
   } 
   else{
        var words = [
            //"horse"
            // "falcon",
            // "monkey",
            "goose"
            // "hamster",
            // "tortoise"
        ];
        
        word = words[Math.floor(Math.random() * words.length)];
        lives = 10;
        answerArray = [];
        wrongArray = [];

        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        
        var result = answerArray.join(' ');

        document.getElementById('currentWord').innerHTML = result;
        document.getElementById('guessesRemain').innerHTML = lives;
        document.getElementById('lettersGuessed').innerHTML = wrongArray;
        newSetup = "false";
    }
}

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
