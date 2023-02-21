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

