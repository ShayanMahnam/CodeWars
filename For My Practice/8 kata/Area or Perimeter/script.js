// my solution

const areaOrPerimeter = function (l, w) {
  // Return your answer
  return l === w ? l * w : (l + w) * 2;
};


// other solutions
const areaOrPerimeter2 = function (l, w) {
  let area = l * w;
  let perimeter = (l + w) * 2;

  return l === w ? area : perimeter;
};

//

const areaOrPerimeter3 = function (l, w) {
  if (w == l) {
    return w * l;
  } else {
    return 2 * l + 2 * w;
  }
};




// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(areaOrPerimeter(3, 3), 9);
    assert.strictEqual(areaOrPerimeter(6, 10), 32);
  });
});