// my solution

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n == 1) {
    return 0;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}


// other solutions

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

//

const getRealFloor = (n) => {
  if (n >= 13) return n - 2;
  if (n > 0) return n - 1;
  return n;
};

//


function getRealFloor(n) {
  // Less than 1, return n
  if (n <= 0) return n;

  return n - (n >= 13 ? 2 : 1);
}

//

const getRealFloor = (n) => (n > 0 ? --n - (n >= 13) : n);



// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getRealFloor(1), 0);
    assert.strictEqual(getRealFloor(5), 4);
    assert.strictEqual(getRealFloor(15), 13);
    assert.strictEqual(getRealFloor(-2), -2);
  });
});
