//Create secretNumber
var secretNumber = 4;
var seguir = true;

while (seguir) {

  //Ask user
  var guess = prompt("Guess Number");
  var numGuess = Number(guess);

  // Check i  f guess if righti
  if (numGuess === secretNumber)
  {
    seguir = false;
    alert("Congratullation you win");
  }
  else if (numGuess > secretNumber){
    alert("To high, try again");
  }
  else if (numGuess < secretNumber){
    alert("To low, try again");
  }

}
