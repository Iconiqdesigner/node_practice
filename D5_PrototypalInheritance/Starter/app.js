// Your Javascript Code Goes Here
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.firstname + " " + this.lastname + ".");
}

var john = new Person("Alligator", "Jones");
var swamp = new Person("Swampy", "Marshall");

john.greet();
swamp.greet();

console.log(john.__proto__);
console.log(swamp.__proto__);
console.log(john.__proto__ === swamp.__proto__);
