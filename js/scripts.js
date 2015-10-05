var pizza = function(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

var makePizza = function (size, toppings) {
  var result = new pizza(size, toppings);
  return result;
}

var getToppings = function (thePizza) {
  var result = thePizza.toppings;
  return result;
}
