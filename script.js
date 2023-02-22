const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const rollButton = document.getElementById('roll-button');
const standButton = document.getElementById('stand-button');
const throwsCount = document.getElementById('throws-count');
let throws = 0;
let frozenDice = [];

function rollDice() {
  let diceValues = [];

  // check which dice should be frozen
  let shouldFreezeDice = frozenDice.length < 3;
  if (!shouldFreezeDice) {
    frozenDice = [];
  }

  for (let i = 0; i < 3; i++) {
    let randomValue;
    if (shouldFreezeDice && frozenDice.includes(i)) {
      // if the dice is frozen, use its existing value
      randomValue = parseInt(diceValues[i - 1]);
    } else {
      randomValue = Math.floor(Math.random() * 6) + 1;
    }

    diceValues.push(randomValue);
  }

  // update the dice values in the HTML
  dice1.textContent = diceValues[0];
  dice2.textContent = diceValues[1];
  dice3.textContent = diceValues[2];

  throws++;
  throwsCount.textContent = throws + ' throws';
}

function freezeDice(event) {
  const diceId = event.target.id;
  const diceIndex = diceId[diceId.length - 1] - 1;
  if (!frozenDice.includes(diceIndex)) {
    frozenDice.push(diceIndex);
    document.getElementById(diceId).classList.add('frozen');
  } else {
    frozenDice.splice(frozenDice.indexOf(diceIndex), 1);
    document.getElementById(diceId).classList.remove('frozen');
  }
}

function stand() {
  // save the current dice values to the right side
  const scoreList = document.getElementById('score-list');
  const newScore = document.createElement('li');
  newScore.textContent = dice1.textContent + ' ' + dice2.textContent + ' ' + dice3.textContent;
  scoreList.appendChild(newScore);

  // reset the throws and frozen dice
  throws = 0;
  throwsCount.textContent = throws + ' throws';
  frozenDice = [];

  // reset the dice values to empty
  dice1.textContent = '';
  dice2.textContent = '';
  dice3.textContent = '';
  document.getElementById('dice1').classList.remove('frozen');
  document.getElementById('dice2').classList.remove('frozen');
  document.getElementById('dice3').classList.remove('frozen');
}

rollButton.addEventListener('click', rollDice);
dice1.addEventListener('click', freezeDice);
dice2.addEventListener('click', freezeDice);
dice3.addEventListener('click', freezeDice);
standButton.addEventListener('click', stand);
