const rollBtn = document.getElementById("roll-btn");
const diceElems = document.querySelectorAll(".dice");

rollBtn.addEventListener("click", () => {
  diceElems.forEach((dice) => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomValue;
  });
});

function rollDice() {
  // Get the dice squares
  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');
  const dice3 = document.getElementById('dice3');
  
  // Generate random numbers for each dice
  const value1 = Math.floor(Math.random() * 6) + 1;
  const value2 = Math.floor(Math.random() * 6) + 1;
  const value3 = Math.floor(Math.random() * 6) + 1;
  
  // Update the values of the dice squares
  dice1.innerText = value1;
  dice2.innerText = value2;
  dice3.innerText = value3;
}
