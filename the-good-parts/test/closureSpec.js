describe("Closures in JavaScript", function() {
  var they = it;
  they("allow you to encapsulate variables", function() {
    var quo = function (status) {
      return {
        get_status: function () {
          return status;
        }
      };
    };
    var myQuo = quo("neat");
    expect(myQuo.get_status()).toEqual("neat");
  });
});
