'use strict';

// // select elements
// const btnNewGame = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const diceImg = document.querySelector('.dice');
// let activePlayer = 0;
// let currentPoint = 0;

// // implement game logic

// btnNewGame.addEventListener('click', reset);
// btnRoll.addEventListener('click', roll);
// btnHold.addEventListener('click', hold);

// function reset() {
//     activePlayer = 0;
//     currentPoint = 0;
//     for (let i = 0; i <= 1; i++) {
//         document.querySelector('#score--' + i).textContent = 0;
//         document.querySelector('#current--'  + i).textContent = 0;
//         document.querySelector('.player--' + i).classList.remove('player--winner', 'player--active');
//     }
//     document.querySelector('.player--' + activePlayer).classList.add('player--active');  
//     diceImg.classList.add('hidden');
//     btnHold.disabled = false;
//     btnRoll.disabled = false;
// }


// function roll() {
//     // get the dice number
//     const diceNum = Math.trunc(Math.random() * 6) + 1;
//     // display dice image
//     if (diceImg.classList.contains('hidden'))
//         diceImg.classList.remove('hidden');
//     diceImg.src = 'dice-' + diceNum + '.png';

//     if (diceNum === 1) {
//         switchPlayer();
//         return;
//     }
//     // increase and display current point
//     currentPoint += diceNum;
//     document.querySelector('#current--' + activePlayer).textContent = currentPoint;
// }

// function hold() {
//     // add up the score
//     const score = Number(document.querySelector('#score--' + activePlayer).textContent) + 
//                     currentPoint;
//     // display the score
//     document.querySelector('#score--' + activePlayer).textContent = score;
//     if (score >= 30) {
//         getWinner();
//         return;
//     }  
//     switchPlayer();
// }

// function getWinner() {
//     document.querySelector('.player--active').classList.add('player--winner');
//     btnHold.disabled = true;
//     btnRoll.disabled = true;
// }

// function switchPlayer() {
//     // change active player
//     document.querySelector('.player--' + activePlayer).classList.remove('player--active');
//     // reset the current score
//     document.querySelector('#current--' + activePlayer).textContent = 0;
//     activePlayer = (activePlayer == 0) ? 1 : 0;
//     currentPoint = 0;
//     document.querySelector('.player--' + activePlayer).classList.add('player--active');
// }

// reset();

// select DOM element

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');

// implement game logic

let activePlayer = 0;
let currentScore = 0;

btnNewGame.addEventListener('click', reset);
btnRoll.addEventListener('click', role);
btnHold.addEventListener('click', hold);

function role() {
    // generate random dice number
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // display dice img
    if (diceImg.classList.contains('hidden')) {
        diceImg.classList.remove('hidden');
    }
    diceImg.src = 'dice-' + diceNum + '.png';
    // check if dice num is 1, change player
    if (diceNum === 1) {
        changePlayer();
        return;
    }
    // get and display current score
    currentScore += diceNum;
    document.querySelector('#current--' + activePlayer).textContent = currentScore;
}

// change player
function changePlayer() {
    // remove player active class
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    // reset current score
    document.querySelector('#current--' + activePlayer).textContent = 0;
    currentScore = 0;
    // change player
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--' + activePlayer).classList.add('player--active');
}

function hold() {
    // get the new total score
    const newScore = Number(document.querySelector('#score--' + activePlayer).textContent) + currentScore;
    // display score
    document.querySelector('#score--' + activePlayer).textContent = newScore;
    // check for winner
    if (newScore > 30) {
        getWinner();
    } else {
        changePlayer();
    }
}

function getWinner() {
    document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    document.querySelector('#current--' + activePlayer).textContent = 0;
    // disable hole and role button
    btnHold.disabled = true;
    btnRoll.disabled = true;
}


// reset the game
function reset() {
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    document.querySelector('.player--' + activePlayer).classList.remove('player--winner');
    activePlayer = 0;
    currentScore = 0;
    document.querySelector('.player--' + activePlayer).classList.add('player--active');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    diceImg.src = "";
    diceImg.classList.add('hidden');
    btnHold.disabled = false;
    btnRoll.disabled = false;
}

reset();