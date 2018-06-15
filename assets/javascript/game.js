
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

function reset(){
    guessesLeft = 10;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    lettersGuessed = [];
    
}

document.onkeyup = function (event) {

    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    console.log("computerGuess" + computerGuess);

    if (userGuess === computerGuess) {
        console.log("You win!");
        wins++;
        reset();
    }
    else {
        guessesLeft--;
    }

    if(guessesLeft === 0){
        losses++;
        reset();
    }

    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);


    var displayHtml =
        "<p>You choose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guessesLeft: " + guessesLeft + "</p>" +
        "<p>Letters Guessed: " + lettersGuessed + "</p>"


    document.querySelector("#game").innerHTML = displayHtml;



};