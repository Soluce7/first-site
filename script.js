const rollBtn = document.getElementById("roll-btn");
const diceElems = document.querySelectorAll(".dice");

rollBtn.addEventListener("click", () => {
  diceElems.forEach((dice) => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomValue;
  });
});

