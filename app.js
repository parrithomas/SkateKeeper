// let skate = ['/', 'S', 'K', 'A', 'T', 'E']
// let kickflip = ['/', 'K', 'I', 'C', 'K', 'F', 'L', 'I', 'P']
let player1score = 0;
let player2score = 0;
let targetScore = 'Skate';
let gameOver = false;
let targetWord = targetScore;
targetScore = targetWord.length;


// define elements
const player1Button = document.querySelector('.player1');
const p1score = document.querySelector('.player-one-score');
const player2Button = document.querySelector('.player2');
const p2score = document.querySelector('.player-two-score');
const resetButton = document.querySelector('.reset');
const targetScoreInput = document.querySelector('#score-limit')
const mainBox = document.querySelector('.main-box');
const p1container = document.querySelector('.player1-container')
const p2container = document.querySelector('.player2-container')

// set target score
targetScoreInput.addEventListener('change', function (e) {
    targetWord = targetScoreInput.value;
    targetScore = targetScoreInput.value.length;
    reset();
})


player1Button.addEventListener('click', function (e) {
    if (!gameOver) {
        player1score++;
        p1score.append(innerText = targetWord[player1score - 1]);
        if (player1score === targetScore) {
            gameOver = true;
            p1container.classList.add('loser');

            p2container.classList.add('winner')
            p2score.classList.remove('line-through');
            p2score.innerText = 'Winner!';
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
    }
})

player2Button.addEventListener('click', function (e) {
    if (!gameOver) {
        player2score++;
        p2score.append(innerText = targetWord[player2score - 1]);
        if (player2score === targetScore) {
            gameOver = true;
            p2score.classList.add('loser');
            p1score.classList.add('winner');
            p1score.classList.remove('line-through');
            p1score.innerText = 'Winner!';
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
    }
})

resetButton.addEventListener('click', reset)

// reset the game
function reset() {
    gameOver = false;
    player1score = 0;
    player2score = 0;
    p1container.classList.remove('loser', 'winner');
    p2container.classList.remove('loser', 'winner');
    p1score.classList.add('line-through')
    p2score.classList.add('line-through')
    player1Button.removeAttribute('disabled')
    player2Button.removeAttribute('disabled')
    p1score.innerText = '';
    p2score.innerText = '';
}

