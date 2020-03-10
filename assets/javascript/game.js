document.addEventListener('keydown', newWord);

function newWord()
{
    var words = [
        "horse",
        "falcon",
        "monkey",
        "goose",
        "hamster",
        "tortoise",
    ];
    
    var word = words[Math.floor(Math.random() * words.length)];
    
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    
    var result = answerArray.join(' ');

    document.getElementById('currentWord').innerHTML = result;
}



