describe('makePizza', function(){
  it("returns a pizza object", function(){
    expect(makePizza("large", ["cheese"])).to.be.an.instanceof(pizza);
  })
});

describe('getToppings', function(){
  var thePizza = makePizza("large", ["cheese", "sausage"]);
  it("returns correct toppings", function(){
    expect(getToppings(thePizza)).to.eql(["cheese", "sausage"]);
  })
});
