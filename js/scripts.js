var pizza = function(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

var makePizza = function (pizzaSize, toppings) {
  var result = new pizza(pizzaSize, toppings);
  return result;
}

var getToppings = function (thePizza) {
  var result = thePizza.toppings;
  return result;
}

var getSize = function (thePizza) {
  var result = thePizza.pizzaSize;
  return result;
}
