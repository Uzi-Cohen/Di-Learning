alert("please guess a number .");
var answer = Math.floor(Math.random() * 10);
var userChoice = prompt("What's your guess?");

if (answer == userChoice) {
  alert("You are correct, the answer is " + userChoice);
}
else {
  alert ("You are wrong, the answer is " + answer);
}
