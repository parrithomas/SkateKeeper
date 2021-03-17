// Setting defaults
let targetScore = 'Skate';
let gameOver = false;
let targetWord = targetScore;
targetScore = targetWord.length;

// create players as objects
const player1 = {
    score: 0,
    button: document.querySelector('.player1'),
    display: document.querySelector('.player-one-score')
}

const player2 = {
    score: 0,
    button: document.querySelector('.player2'),
    display: document.querySelector('.player-two-score')
}

// define elements
const resetButton = document.querySelector('.reset');
const targetScoreInput = document.querySelector('#score-limit')
const p1container = document.querySelector('.player1-container')
const p2container = document.querySelector('.player2-container')

// set target score
targetScoreInput.addEventListener('change', function (e) {
    targetWord = targetScoreInput.value;
    targetScore = targetScoreInput.value.length;
    reset();
})

// update the DOM with scores
function updateScore(player, opponent) {
    if (!gameOver) { // if the game isn't over then...
        player.score++; // add 1 to the score
        player.display.append(innerText = targetWord[player.score - 1]); // update the display
    }
    if (player.score === targetScore) { // check that player score = target score
        gameOver = true; // set gameOver to true to break the loop
        player.display.classList.add('loser'); // add loser class the player 
        opponent.display.classList.add('winner') // add winner class too the opponent
        opponent.display.classList.remove('line-through'); // remove line-through class from opponent
        opponent.display.innerText = 'Winner!'; // change opponents display to winner
        player.button.disabled = true; // disable button
        opponent.button.disabled = true; // disable button
    }
}

// running the score funtion when the buttons are clicked. Passing each player's object as parameters
player1.button.addEventListener('click', function (e) {
    updateScore(player1, player2)
})

player2.button.addEventListener('click', function (e) {
    updateScore(player2, player1)
})

resetButton.addEventListener('click', reset)

// reset the game. Loop over player one and player 2 to reset the DOM back to new game
function reset() {
    gameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0
        p.display.innerText = '';
        p.display.classList.remove('loser', 'winner');
        p.display.classList.add('line-through');
        p.button.removeAttribute('disabled');

    }
}

