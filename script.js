// DOM Elements
const rollDiceBtn = document.querySelector("#roll-dice-btn");
const standBtn = document.querySelector("#stand-btn");
const diceEl1 = document.querySelector("#dice-1");
const diceEl2 = document.querySelector("#dice-2");
const diceEl3 = document.querySelector("#dice-3");
const throwsEl = document.querySelector("#throws");

// Game state variables
let throws = 0;
let dice1Value = 0;
let dice2Value = 0;
let dice3Value = 0;
let frozenDice = [];

// Helper function to roll a single dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Helper function to roll all three dices
function rollAllDices() {
  dice1Value = rollDice();
  dice2Value = rollDice();
  dice3Value = rollDice();
  displayDiceValues();
}

// Helper function to display the values of the dices
function displayDiceValues() {
  diceEl1.textContent = dice1Value;
  diceEl2.textContent = dice2Value;
  diceEl3.textContent = dice3Value;
}

// Helper function to handle a dice being clicked
function toggleFreezeDice(dice) {
  if (frozenDice.includes(dice)) {
    frozenDice = frozenDice.filter((d) => d !== dice);
    document.querySelector(`#dice-${dice}`).classList.remove("frozen");
  } else {
    frozenDice.push(dice);
    document.querySelector(`#dice-${dice}`).classList.add("frozen");
  }
}

// Event listener for the Roll Dice button
rollDiceBtn.addEventListener("click", () => {
  if (throws < 3) {
    throws++;
    rollAllDices();
    throwsEl.textContent = `Throws: ${throws}`;
  }
});

// Event listener for the Stand button
standBtn.addEventListener("click", () => {
  // Save the current score
  const score = [dice1Value, dice2Value, dice3Value];
  // Reset game state variables
  throws = 0;
  dice1Value = 0;
  dice2Value = 0;
  dice3Value = 0;
  frozenDice = [];
  // Clear frozen classes from all dices
  document.querySelectorAll(".dice").forEach((diceEl) => {
    diceEl.classList.remove("frozen");
  });
  // Clear throws display
  throwsEl.textContent = "";
  // Clear dice values display
  diceEl1.textContent = "";
  diceEl2.textContent = "";
  diceEl3.textContent = "";
  // TODO: Save score and start a new game
  console.log(score);
});

// Event listeners for each dice
diceEl1.addEventListener("click", () => toggleFreezeDice(1));
diceEl2.addEventListener("click", () => toggleFreezeDice(2));
diceEl3.addEventListener("click", () => toggleFreezeDice(3));

