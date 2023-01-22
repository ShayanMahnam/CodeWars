// my solution
function myFunction() {
  var MyObject = {
    objProperty: "string",
    objMethod: function objMethod() {
      return MyObject.objProperty;
		}
  }
  
  return MyObject;
};

// other solutions


const myFunction = () => ({
  objProperty: `string`,
  objMethod() {
    return this.objProperty;
  },
});


// test

const Test = require("@codewars/test-compat");

describe("checking syntax and function integrity", function () {
  it("should return 'string' when myFunction is called", function () {
    Test.assertEquals(
      myFunction().objMethod(),
      "string",
      'myFunction did not return "string"'
    );
  });
});