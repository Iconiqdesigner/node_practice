// Your Javascript Code Goes Here
var firstname = "Jane";

(function(lastname) {
  var firstname = "John";
  var lastname = lastname
  console.log(firstname + " " + lastname);
}("Doe"));

console.log(firstname);
