// my solution

const sumNums = (acc, cur) => acc + cur;

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}


// other solutions

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

//

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

//

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min;
}



// test

const { assert } = require("chai");

it("example tests", () => {
  assert.strictEqual(sumArray(null), 0);
  assert.strictEqual(sumArray([]), 0);
  assert.strictEqual(sumArray([3]), 0);
  assert.strictEqual(sumArray([3, 5]), 0);
  assert.strictEqual(sumArray([6, 2, 1, 8, 10]), 16);
  assert.strictEqual(sumArray([0, 1, 6, 10, 10]), 17);
  assert.strictEqual(sumArray([-6, -20, -1, -10, -12]), -28);
  assert.strictEqual(sumArray([-6, 20, -1, 10, -12]), 3);
});