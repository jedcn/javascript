xdescribe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can be declared by calling 'pending' in the spec body", function() {
    expect(true).toBe(false);
    pending();
  });
});

describe("Pending specs", function() {
  it("can be declared with 'it' but without a function");

  xit("can be declared 'xit'", function() {
    expect(true).toBe(false);
  });
});
