// my solution

function addBinary(a, b) {
  return (a + b).toString(2);
}


// other solutions
const addBinary = (a, b) => (a + b).toString(2);

//

function addBinary(a, b) {
  var c = a + b;
  var res = "";
  while (c >= 1) {
    var res = (c % 2) + res;
    c = Math.floor(c / 2);
  }
  return res;
}




// test
const Test = require("@codewars/test-compat");

describe("addBinary(1,2)", function () {
  var results1 = addBinary(1, 2);
  it("Should return something that isn't falsy", function () {
    Test.expect(results1, "Something is wrong, no results!");
  });
  it('Should return "11"', function () {
    Test.assertEquals(results1, "11");
  });
});