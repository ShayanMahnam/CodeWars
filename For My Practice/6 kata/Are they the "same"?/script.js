// my solution
function comp(a, b) {
  // Check if either a or b is null or undefined, return false
  if (!a || !b) {
    return false;
  }

  // Check if the lengths of a and b are not equal, return false
  if (a.length !== b.length) {
    return false;
  }

  // Sort array a in ascending order and assign it to sortedA
  const sortedA = a.sort((x, y) => x - y);

  // Sort array b in ascending order and assign it to sortedB
  const sortedB = b.sort((x, y) => x - y);

  // Iterate over each element in sortedA
  for (let i = 0; i < sortedA.length; i++) {
    // Check if the square of the current element in sortedA
    // is not equal to the corresponding element in sortedB, return false
    if (sortedA[i] * sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  // If all pairs of elements match, return true
  return true;
}



// other solutions
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

//

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

//

const comp = (array1, array2) =>
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every((item) => {
    const index = array2.indexOf(Math.pow(item, 2));
    return index > -1 ? array2.splice(index, 1) : false;
  });




// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    assert.isTrue(comp(a1, a2));
  });
});