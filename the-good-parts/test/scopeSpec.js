describe("JavaScript Scope Rules", function() {

  it("is based in functions, not blocks", function() {
    var foo = function () {
      var a = 3, b = 5;
      var bar = function () {
        var b = 7, c = 11;
        // Referencing a here touches the a declared outside.
        expect(a).toEqual(3);

        // Referencing b here touches the newly declared b, and not
        // the external b.
        expect(b).toEqual(7);

        // Referencing c here touches the newly declared c.
        expect(c).toEqual(11);

        // Changing a here changes the a declared outside
        a += b + c;
        expect(a).toEqual(21);
      };
      bar();
      // Variables declared outside of bar() and *not* declared inside
      // of bar() will change if changed within bar().
      expect(a).toEqual(21);

      // Variables declared outside of bar() but re-declared inside of
      // bar() will *not* changed within bar(). Any changes within bar
      // will impact the newly declared variable.
      expect(b).toEqual(5);

      var referenceC = function() {
        // Variables declared inside of bar() will not be available
        // outside of bar().
        return c;
      };
      expect(referenceC).toThrow();
    };
    foo();
  });
});
