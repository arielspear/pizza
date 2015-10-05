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

describe('getSize', function(){
  var thePizza = makePizza("small", ["cheese", "mushroom"]);
  it("returns correct size", function(){
    expect(getSize(thePizza)).to.equal("small");
  })
});

describe('makePrice', function(){
  var thePizza = makePizza("large", ["cheese", "pineapple", "ham", "sausage"]);
  it("returns price for large with 4 toppings", function(){
    expect(makePrice(thePizza)).to.equal("$16");
  })
});
