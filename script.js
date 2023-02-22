const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const rollDiceBtn = document.querySelector('.roll-button');

function rollDice() {
  const diceValues = [];
  for (let i = 0; i < 3; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    diceValues.push(randomValue);
  }
  dice1.textContent = diceValues[0];
  dice2.textContent = diceValues[1];
  dice3.textContent = diceValues[2];
}

rollDiceBtn.addEventListener('click', rollDice);
