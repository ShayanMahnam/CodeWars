// my solution

function swapValues(arr) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}


// other solutions

function swapValues() {
  return arguments[0].reverse();
}
//

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
//

function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var arr = [1, 2];
    swapValues(arr);
    Test.assertEquals(arr[0], 2, "Failed swapping numbers");
    Test.assertEquals(arr[1], 1, "Failed swapping numbers");
  });
});
