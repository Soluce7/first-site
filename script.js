function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let dice3 = Math.floor(Math.random() * 6) + 1;
  
  let result1 = document.getElementById('result1');
  let result2 = document.getElementById('result2');
  let result3 = document.getElementById('result3');
  
  result1.innerHTML = dice1;
  result2.innerHTML = dice2;
  result3.innerHTML = dice3;
}

function displayDice() {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var die3 = document.getElementById("die3");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var d3 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2 + d3;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
}


