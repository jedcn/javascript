describe("JavaScript's Patterns of Invocation + this", function() {

  // When a function is stored a property of an object it is called a
  // "method." When a "method" is invoked, this refers to the object
  // in which it is stored.
  describe("The Method Invocation Pattern", function() {

    var thisLexicalCapture;

    var someObject = {
      value: 0,
      increment: function (inc) {
        thisLexicalCapture = this;
        this.value += typeof inc === 'number' ? inc : 1;
      }
    };

    it("binds this to the object in which it is stored", function() {
      someObject.increment(1); // Need to invoke to capture "this"
      expect(thisLexicalCapture).toEqual(someObject);
    });
  });

  // When a function is not the property of an object, then it is
  // invoked as a "function," rather than a method. When a "function"
  // is invoked, this refers to the global object.
  describe("The Function Invocation Pattern", function() {

      var thisLexicalCapture;

      var add = function(a, b) {
        thisLexicalCapture = this;
        return a + b;
      };

    it("binds this to the global object", function() {
      add(3, 4); // Need to invoke to capture "this"
      var theGlobalObjectInABrowser = window;
      expect(thisLexicalCapture).toEqual(theGlobalObjectInABrowser);
    });

  });

  describe("The Constructor Invocation Pattern", function() {

  });

  describe("The Apply Invocation Pattern", function() {

  });
});
