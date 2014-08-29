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

  // When a function is used as a constructor, this refers to the
  // object that is being constructed.
  describe("The Constructor Invocation Pattern", function() {

    var thisLexicalCapture;

    var Quo = function (string) {
      thisLexicalCapture = this;
      this.status = string;
    };

    Quo.prototype.get_status = function () {
      return this.status;
    };

    it("binds this to the constructed object", function() {
      var myQuo = new Quo("confused");
      expect(thisLexicalCapture).toEqual(myQuo);
      expect(myQuo.get_status()).toEqual("confused");
    });
  });

  describe("The Apply Invocation Pattern", function() {

    it("binds this to the first argument of apply", function() {
      var add = function (a, b) {
        return a + b;
      };
      var result = add.apply(null, [3, 4]);
      expect(result).toEqual(7);
    });

    it("allows you to invoke methods that are not defined by an object", function() {

      var Quo = function (string) {
        this.status = string;
      };

      Quo.prototype.get_status = function () {
        return this.status;
      };

      var statusObject = {
        status: 'A-OK'
      };

      // statusObject does not inherit from Quo.prototype, but we can
      // invoke the get_status method on statusObject even though
      // statusObject does not have a get_status method.
      var status = Quo.prototype.get_status.apply(statusObject);
      expect(status).toEqual('A-OK');
    });
  });
});
