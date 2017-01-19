// Your Javascript Code Goes Here
var person = {
  firstname: "John",
  lastname: "Doe",
  greet: function() {
    console.log("Hello, " + this.firstname + " " + this.lastname + ".")
  }
}

person.firstname = "Aligator"
person.lastname = "Jones"

person.greet();

console.log(person['firstname']);
