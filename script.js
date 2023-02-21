function rollDice() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  var dice3 = document.getElementById("dice3");

  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;
  var dice3Value = Math.floor(Math.random() * 6) + 1;

  dice1.innerHTML = dice1Value;
  dice2.innerHTML = dice2Value;
  dice3.innerHTML = dice3Value;
}
