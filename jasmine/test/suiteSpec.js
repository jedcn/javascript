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
