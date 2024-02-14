const inputs = document.querySelector(".word"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess span"),
    mistakes = document.querySelector(".wrong span"),
    resetBtn = document.querySelector(".reset"),
    hintBtn = document.querySelector(".showhint"),
    hintElement = document.querySelector(".hint"),
    typeInput = document.querySelector(".type-input");

// Intializing game variables
let word, incorrectLetters = [], correctLetters = [], maxGuesses;

// Select random word from word list and set up game
function startNewGame() {
    alert("New Game Started! Guess New Word :");
    // Hide hint element
    hintElement.style.display = "none";
    hintElement.style.opacity = "0";

    // Choose random word from db and setup game
    const ranWord = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranWord.word;
    // If word chars >= 5 then max guess = 8 else max guess = 6
    maxGuesses = word.length >= 5 ? 8 : 6;
    incorrectLetters = [];
    correctLetters = [];
    hintTag.innerText = ranWord.hint;
    guessLeft.innerText = maxGuesses;
    mistakes.innerText = incorrectLetters;

    // Create input for each letter of word
    inputs.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        inputs.appendChild(input);
    }
}