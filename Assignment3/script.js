// Task 1

document.write("Task 1" + "<br />");

var weather = "raining",
  health = "sick",
  officeWork = "not done",
  temprature = -2;

if (
  weather === "pleasant" &&
  health === "good" &&
  officeWork === "completed" &&
  temprature < 10
)
  document.write("I will go to work...!");
else document.write("I will not go to work...!");

// Task 2
document.write("<br>");
document.write("<br>");
document.write("<br>" + "Task 2");

var num1 = 0,
  num2 = 0;

num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));
var opr = prompt("Enter '+' or '-' or '*' or '/'");

switch (opr) {
  case "+":
    document.write("<br>");
    document.write(num1 + num2);
    break;
  case "-":
    document.write("<br>");
    document.write(num1 - num2);
    break;
  case "*":
    document.write("<br>");
    document.write(num1 * num2);
    break;
  case "/":
    document.write("<br>");
    document.write(num1 / num2);
    break;
  default:
    document.write("<br>");
    document.write("The operator you entered is invalid");
}

// Task 3

document.write("<br>");
document.write("<br>");
document.write("Task 3");

var arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
var size = arr.length;

for (var i = size - 1; i >= 0; i--) {
  document.write("<br>");
  document.write(arr[i]);
}

// Task 4

document.write("<br>");
document.write("<br>");
document.write("Task 4");

var arr = [2, 3, 4, 5, 7, 11, 13, 7, 19];
var size = arr.length;
var o = 0;

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

while (o < size) {
  if (isPrime(arr[o])) {
    document.write("<br>");
    document.write(arr[o]);
  }
  o++;
}

document.write("<br>");
var input = parseInt(prompt("Enter a number to print a table of"));

var temp = 1;

while (temp <= 10) {
  document.write("<br>");
  document.write(input + " x " + temp + " = ");
  document.write(temp * input);
  temp++;
}


