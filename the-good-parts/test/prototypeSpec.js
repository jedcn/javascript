describe("JavaScript Prototype Support", function() {

  var they = it;

  // This is Crockford's "create"
  if (typeof(Object.create) !== 'function') {
    Object.create = function (o) {
      var F = function () {};
      F.prototype = o;
      return new F();
    };
  }

  var first, second;

  beforeEach(function() {
    first = {
      "first-name": "Jerome",
      "last-name": "Howard"
    };
    second = Object.create(first);
  });

  describe("prototypes", function() {
    they("can be compared ", function() {
      expect(second.prototype).toEqual(first.prototype);
    });

    they("delegate 'upstream' for property retrieval", function() {
      expect(second["first-name"]).toEqual(first["first-name"]);
      expect(second["last-name"]).toEqual(first["last-name"]);
    });

    they("allow 'downstream' objects to have local updates", function() {
      second["first-name"] = "Jed";
      expect(second["first-name"]).not.toEqual(first["first-name"]);
    });
  });

  describe("hasOwnProperty", function() {
    they("determines if a property is present due to an upstream prototype (or not)", function() {
      expect(second.hasOwnProperty("first-name")).toBe(false);
      second["first-name"] = "Jed";
      expect(second.hasOwnProperty("first-name")).toBeTruthy();
    });
  });
});
