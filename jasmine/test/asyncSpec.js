describe("Asynchronous specs", function() {

  var value;

  /*
    Calls to beforeEach, it, and afterEach can take an optional single
    argument that should be called when the async work is complete.
  */

  beforeEach(function(done) {
    setTimeout(function() {
      value = 0;
      done();
    }, 1);
  });

  /*
    This spec will not start until the done function is called in the
    call to beforeEach above. And this spec will not complete until
    its done is called.
  */

  it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBeGreaterThan(0);
    done();
  });

  /*
    By default jasmine will wait for 5 seconds for an asynchronous
    spec to finish before causing a timeout failure. If specific
    specs should fail faster or need more time this can be adjusted
    by setting jasmine.DEFAULT_TIMEOUT_INTERVAL around them.

    If the entire suite should have a different timeout,
    jasmine.DEFAULT_TIMEOUT_INTERVAL can be set globally, outside of
    any given describe.
  */

  describe("long asynchronous specs", function() {
    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it("takes a long time", function(done) {
      setTimeout(function() {
        done();
      }, 9000);
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });
});
