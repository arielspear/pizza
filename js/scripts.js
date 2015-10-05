var pizza = function(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

var makePizza = function(pizzaSize, toppings) {
  var result = new pizza(pizzaSize, toppings);
  return result;
}

var getToppings = function(thePizza) {
  var result = thePizza.toppings;
  return result;
}

var getSize = function(thePizza) {
  var result = thePizza.pizzaSize;
  return result;
}

var makePrice = function(thePizza) {
  if(thePizza.pizzaSize === "small") {
    var base = 8;
  } else if (thePizza.pizzaSize === "medium") {
    var base = 10;
  } else if (thePizza.pizzaSize === "large") {
    var base = 12;
  } else var base = 0;
  
  var toppingPrice = thePizza.toppings.length;
  var result = "$" + (base + toppingPrice);
  return result;
}
