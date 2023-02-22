function rollDice() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  var dice3 = document.getElementById("dice3");

  var value1 = Math.floor(Math.random() * 6) + 1;
  var value2 = Math.floor(Math.random() * 6) + 1;
  var value3 = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = value1;
  dice2.textContent = value2;
  dice3.textContent = value3;
}
