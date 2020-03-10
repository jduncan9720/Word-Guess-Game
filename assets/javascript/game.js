var words = [
    "horse",
    "falcon",
    "monkey",
    "goose",
    "hamster",
    "tortoise",
];

var word = word[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
var remainingLetters = word.length


