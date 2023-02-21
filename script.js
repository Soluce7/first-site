const dice = document.querySelectorAll(".die-list");
const diceArray = [...dice];
const button = document.getElementById("roll-button");

function rollDice() {
  button.disabled = true;
  diceArray.forEach((die) => {
    toggleClasses(die);
    const randomNumber = getRandomNumber(1, 6);
    updateDice(die, randomNumber);
  });

  setTimeout(() => {
    button.disabled = false;
  }, 1000);
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDice(die, randomNumber) {
  die.dataset.roll = randomNumber;
  switch (randomNumber) {
    case 1:
      die.innerHTML = '<span class="dot"></span>';
      break;
    case 2:
      die.innerHTML = '<span class="dot"></span><span class="dot"></span>';
      break;
    case 3:
      die.innerHTML =
        '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      break;
    case 4:
      die.innerHTML =
        '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      break;
    case 5:
      die.innerHTML =
        '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      break;
    case 6:
      die.innerHTML =
        '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      break;
    default:
      die.innerHTML = "X";
  }
}

if (button) {
  button.addEventListener("click", rollDice);
}
