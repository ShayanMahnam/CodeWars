// my solution

function removeSmallest(numbers) {
  let newArr = numbers.slice(0);
  let smallest = newArr.indexOf(Math.min(...newArr));
  newArr.splice(smallest, 1);
  return newArr;
}


// other solutions

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
//
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

//

function removeSmallest(numbers) {
  var smallest;
  var newNums = [];
  numbers.forEach(function (num) {
    if (smallest > num || smallest === undefined) {
      smallest = num;
    }
  });
  var index = numbers.indexOf(smallest);
  numbers.forEach(function (n, i) {
    if (i !== index) {
      newNums.push(n);
    }
  });
  return newNums;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("removeSmallest", function () {
  it("works for the examples", function () {
    assert.deepEqual(
      removeSmallest([1, 2, 3, 4, 5]),
      [2, 3, 4, 5],
      "Wrong result for [1, 2, 3, 4, 5]"
    );
    assert.deepEqual(
      removeSmallest([5, 3, 2, 1, 4]),
      [5, 3, 2, 4],
      "Wrong result for [5, 3, 2, 1, 4]"
    );
    assert.deepEqual(
      removeSmallest([2, 2, 1, 2, 1]),
      [2, 2, 2, 1],
      "Wrong result for [2, 2, 1, 2, 1]"
    );
    assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
  });

  it("returns [] if the list has only one element", function () {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });

  function randomArray(length) {
    return Array.from({ length: length }, () => ~~(Math.random() * 400));
  }

  it("returns a list that misses only one element", function () {
    for (let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      assert.strictEqual(
        removeSmallest(arr).length,
        l - 1,
        `Wrong result for ${arr}`
      );
    }
  });
});