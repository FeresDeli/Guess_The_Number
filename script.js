'use strict';

let highscore = 0;
let score;
let randomNumber;
let gameActive = true;

function initGame() {
  gameActive = true;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.transition = 'background-color .5s';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.transition = 'width .5s';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
}

function guessGame() {
  if (gameActive === true) {
    const guess = Number(document.querySelector('.guess').value);

    document.querySelector('.score').textContent = score;

    if (score === 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Sahbi hak dhab3i brsha.';
      document.querySelector('body').style.backgroundColor = '#8b0000';
      document.querySelector('body').style.transition = 'background-color .5s';
      gameActive = false;
    } else {
      if (!guess) {
        document.querySelector('.message').textContent = 'Yaltiiiif! Ekteb noumrou.';
      } else {
        if (guess >= 1 && guess <= 20) {
          if (guess === randomNumber) {
            document.querySelector('.message').textContent = 'You won!';
            document.querySelector('.number').textContent = randomNumber;
            if (score > highscore) {
              highscore = score;
              document.querySelector('.highscore').textContent = score;
            }

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            gameActive = false;
          } else {
            document.querySelector('.message').textContent = guess > randomNumber ? 'Na9es Chaywa bro!' : 'Zid chwaya miselech.';
            score -= 1;
            document.querySelector('.score').textContent = score;
          }
        } else {
          document.querySelector('.message').textContent = 'Yaltiiiiif! Men 1 L 10.';
        }
      }
    }
  }
}

initGame();

document.querySelector('.again').addEventListener('click', initGame);
document.querySelector('.check').addEventListener('click', guessGame);
