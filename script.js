const diceSides = [
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;"
];

const rollDiceBtn = document.getElementById("roll-dice-btn");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

function rollDice() {
  const value1 = diceSides[Math.floor(Math.random() * diceSides.length)];
  const value2 = diceSides[Math.floor(Math.random() * diceSides.length)];
  const value3 = diceSides[Math.floor(Math.random() * diceSides.length)];

  dice1.innerHTML = value1;
  dice2.innerHTML = value2;
  dice3.innerHTML = value3;
}

rollDiceBtn.addEventListener("click", rollDice);
