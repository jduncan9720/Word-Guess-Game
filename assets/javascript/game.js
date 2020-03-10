var newSetup = "true";
var word = "NULL";
var answerArray = [];
var wrongArray = [];
document.onkeyup = function newWord(event)
{
    var letter = event.key.toLowerCase();
   if(newSetup == "false"){
       wordCheck(letter);
   } 
   else{
        var words = [
            "horse"
            // "falcon",
            // "monkey",
            // "goose",
            // "hamster",
            // "tortoise"
        ];
        
        word = words[Math.floor(Math.random() * words.length)];
        
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        
        var result = answerArray.join(' ');

        document.getElementById('currentWord').innerHTML = result;
        newSetup = "false";
    }
}

function wordCheck(letter) {
    if (word.includes(letter)) {
        answerArray[word.indexOf(letter)] = letter;
        var result = answerArray.join(' ');
        document.getElementById('currentWord').innerHTML = result;
    }
    else{
        if(!wrongArray.includes(letter)){
            wrongArray.push(letter);
            document.getElementById('lettersGuessed').innerHTML = wrongArray;
        }
    }
}

