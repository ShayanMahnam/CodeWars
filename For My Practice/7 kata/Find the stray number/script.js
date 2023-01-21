// my solution


function stray(numbers) {
  let map = new Map();
  numbers.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let entries = map.entries();
  for (let [key, value] of entries) {
    if (value === 1) return key;
  }
}

// other solutions
function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

//

const stray = (nums) => nums.reduce((a, b) => a ^ b);

//

function stray(numbers) {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
  });
});
