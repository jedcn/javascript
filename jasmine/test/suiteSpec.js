describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite is just a function", function() {
  var a = false;
  it("and so is a spec", function() {
    expect(a).toBe(false);
  });
});

describe("A spec", function() {
  it("is just a function, so it can contain any code", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
