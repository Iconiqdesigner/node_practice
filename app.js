// var a = 1;
// var b = 2;
// var c = a + b;
//
// console.log(c);

// // function statement
// function greet() {
//   console.log("hi!");
// }
// greet();

// // functions are first class objects
// function logGreeting(fn) {
//   fn();
// }
// logGreeting(greet);

//function expression
var greetMe = function() {
  console.log("Hi Robert.");
}

greetMe();

//still first class
function logGreeting(fn) {
  fn();
}

logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function() {
  console.log('Hello Robert');
});
