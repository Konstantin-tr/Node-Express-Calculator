var assert = require("assert");
var maths = require("..\\src\\MathsModule.js");

describe("Maths", function () {
  describe("#add()", function () {
    it("should return sum of two values", function () {
      for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
          assert.equal(maths.add(i, j), i + j);
        }
      }
    });
  });
});
