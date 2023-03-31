// my solution
function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    (function (j) {
      callbacks.push(function () {
        return j;
      });
    })(i);
  }

  return callbacks;
}



// other solutions
function createFunctions(n) {
  var callbacks = [];

  var factory = function (x) {
    return function () {
      return x;
    };
  };

  for (var i = 0; i < n; i++) {
    callbacks.push(factory(i));
  }

  return callbacks;
}

//

function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    let j = i; // or const j = i;
    callbacks.push(function () {
      return j;
    });
  }

  return callbacks;
}




// test

const Test = require("@codewars/test-compat");

describe("example tests", function () {
  it("functions must return correct number", function () {
    var callbacks = createFunctions(5);

    for (var i = 0; i < callbacks.length; i++) {
      Test.assertEquals(callbacks[i](), i, "Function with index " + i);
    }
  });
});