// my solution

function removeEveryOther(arr) {
  //your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// other solutions

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

//

function removeEveryOther(arr) {
  //your code here
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

//

function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 == 0);
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
      "Hello",
      "Hello Again",
    ]);
    assert.deepEqual(
      removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [1, 3, 5, 7, 9]
    );
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([["Goodbye"], { Great: "Job" }]), [
      ["Goodbye"],
    ]);
  });
});
