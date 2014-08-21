describe("Oddities and Unfortunate Aspects of JavaScript", function() {

  it("thinks Boolean(false) is true", function() {
    expect(new Boolean(false)).toBeTruthy();
  });

  describe("typeof", function() {
    it("typeof(an_array) === 'object'", function() {
      var an_array = [];
      expect(typeof(an_array)).toEqual('object');
    });

    it("typeof(null) === 'object'", function() {
      expect(typeof(null)).toEqual('object');
    });
  });
});
