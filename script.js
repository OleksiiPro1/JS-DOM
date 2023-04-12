'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const eventHandler = function() {
    
    const guessingNumber = Number(document.querySelector('.number-input').value);
    // console.log(guessingNumber, typeof guessingNumber);
    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Imput some number';
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Yes! Right!!!';       
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //  else if (guessingNumber < secretNumber) {
    //     if (score > 1 ) {
    //     document.querySelector('.guess-message').textContent = 'not enough';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // } else {
    //     document.querySelector('.guess-message').textContent = 'game over';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    // }
    // }  else if (guessingNumber > secretNumber) {
    //     if (score > 1 ) {
    //     document.querySelector('.guess-message').textContent = 'Too much';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = 'game over';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     } }
     else if (guessingNumber !== secretNumber) {
        if (score > 1 ) {
            document.querySelector('.guess-message').textContent = 
            guessingNumber > secretNumber ? 'Too much' : 'not enough';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.guess-message').textContent = 'game over';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
            }
    }


}

const eventHandlerRestart = function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 5;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.guess-message').textContent = 'Начни угадывать';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';

}

document.querySelector('.check').addEventListener('click', eventHandler );

document.querySelector('.again').addEventListener('click', eventHandlerRestart );
