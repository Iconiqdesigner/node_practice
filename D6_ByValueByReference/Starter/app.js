//Pass by Value
function change(b) {
  b = 2;
}
var a = 1;
console.log(a);

change(a);
console.log(a);


//PASS BY REFERENCE
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {}
c.prop1 = {}
changeObj(c);
console.log(c)
