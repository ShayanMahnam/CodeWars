// my solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let firstArgs = args.sort(function (a, b) {
      return a - b;
    });
    return firstArgs[0];
  }
}


// other solutions


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

//

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

//

class SmallestIntegerFinder {
  findSmallestInt($) {
    return Math.min(...$);
  }
}

//

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function (prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}


// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Smallest Integer Tests", () => {
  let sif = new SmallestIntegerFinder();
  it("Fixed Tests", () => {
    assert.strictEqual(
      sif.findSmallestInt([78, 56, 232, 12, 8]),
      8,
      "Should return the smallest int 8"
    );
    assert.strictEqual(
      sif.findSmallestInt([78, 56, 232, 12, 18]),
      12,
      "Should return the smallest int 12"
    );
    assert.strictEqual(
      sif.findSmallestInt([78, 56, 232, 412, 228]),
      56,
      "Should return the smallest int 56"
    );
    assert.strictEqual(
      sif.findSmallestInt([78, 56, 232, 12, 0]),
      0,
      "Should return the smallest int 0"
    );
    assert.strictEqual(
      sif.findSmallestInt([1, 56, 232, 12, 8]),
      1,
      "Should return the smallest int 1"
    );
  });
});