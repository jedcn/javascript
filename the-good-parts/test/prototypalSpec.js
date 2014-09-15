describe("Prototypal Inheritance in JavaScript", function() {

  var myMammal = {
    name: 'Herb the Mammal',
    get_name: function () {
      return this.name;
    },
    says : function () {
      return this.saying || '';
    }
  };

  describe("A Simple Object Literal", function() {
    it("responds to basic function invocations", function() {
      expect(myMammal.get_name()).toEqual('Herb the Mammal');
      expect(myMammal.says()).toEqual('');
    });
  });

  describe("Differential Inheritance", function() {
    var myCat = Object.create(myMammal);
    myCat.name = 'Henrietta';
    myCat.saying = 'meow';
    myCat.get_name = function () {
      return this.says() + ' ' + this.name + ' ' + this.says();
    };

    myCat.purr = function (n) {
      var i, s = '';
      for (i = 0; i < n; i += 1) {
        if (s) {
          s += '-';
        }
        s += 'r'; }
      return s;
    };

    it("lets you build upon a prototype", function() {
      expect(myCat.name).toEqual('Henrietta');
      expect(myCat.says()).toEqual('meow');
      expect(myCat.get_name()).toEqual('meow Henrietta meow');
      expect(myCat.purr(1)).toEqual('r');
      expect(myCat.purr(2)).toEqual('r-r');
      expect(myCat.purr(3)).toEqual('r-r-r');
    });
  });
});
