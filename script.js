// Select the navigation links and add a click event
// Select the button element
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', rollDices);

function rollDices() {
  const dices = document.querySelectorAll('.dice');
  
  // Roll each dice
  dices.forEach(dice => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;
  });
}

// Add the Roll Dices button dynamically
const container = document.querySelector('.dice-container');
const newButton = document.createElement('button');
newButton.textContent = 'Roll Dices';
container.appendChild(newButton);
