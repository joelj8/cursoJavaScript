//Create secretNumber
var secretNumber = "quit";
var seguir = true;
var todos = [];
while (seguir) {

  //Ask user
  var guess = prompt("What would you like to do?");
  var valGuess = guess.toLowerCase();

  // Check i  f guess if righti
  if (valGuess === secretNumber)
  {
    seguir = false;
    // alert("Congratullation you win");
  }
  else if (valGuess === "new"){
    var valor = prompt("Enter new todo");
    todos.push(valor)
    console.log("Added ToDo");
  }
  else if (valGuess === "delete") {
    var indice = prompt("Enter index of todo to delete");
    todos.splice(indice,1);
    console.log("Deleted ToDo");
  }
  else if (valGuess === "list"){
    console.log("****************");
    todos.forEach(function(todo,i){
      console.log(i + ":  "+ todo);
    });
    console.log("****************");
  }

}
