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


$(document).ready(function() {
  $(document).on("click", "input", function() {
    $("#total").text(makePrice());
    $("#price").show();
  });

  $(document).on("click", ".remove", function() {
      $(this).parent().remove();
      $("#total").text(totalPrice());
  });

  var quantity = 1;
  $("#add").click(function() {
    quantity++;
    $("#order").append('<div class="pizza col-md-4">' +
                        '<div id="size'+quantity+'">' +
                          '<h4>Select a size:</h4>' +
                          '<input type="radio" name="size'+quantity+'" value="small">small' +
                          '<input type="radio" name="size'+quantity+'" value="medium">medium' +
                          '<input type="radio" name="size'+quantity+'" value="large">large' +
                        '</div>' +
                        '<div id="toppings'+quantity+'">' +
                          '<h4>Select toppings:</h4>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="pepperoni"> Pepperoni<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="sausage"> Sausage<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="ham"> Ham<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="pineapple"> Pineapple<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="jalapenos"> Jalapenos<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="olives"> Olives<br>' +
                        '</div>' +
                      '</div>');
  });
});
