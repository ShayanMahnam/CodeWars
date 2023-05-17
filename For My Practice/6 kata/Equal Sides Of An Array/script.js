// my solution

function findEvenIndex(arr) {
  // Iterate over each index of the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the sum of the elements on the left side of the current index
    const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);

    // Calculate the sum of the elements on the right side of the current index
    const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

    // Check if the left sum is equal to the right sum
    if (leftSum === rightSum) {
      return i; // Return the current index if the sums are equal
    }
  }

  return -1; // Return -1 if no such index is found
}


// other solutions
function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

//

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

  //

function findEvenIndex(arr) {
  function sum(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  return arr.findIndex(function (el, i, arr) {
    return sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length));
  });
}

//

function findEvenIndex(arr) {
  return arr.findIndex(
    (e, i, a) =>
      a.slice(0, i).reduce((p, c) => p + c, 0) ==
      a.slice(i + 1).reduce((p, c) => p + c, 0)
  );
}

//

function findEvenIndex(arr) {
  //Code goes here!
  // LOOP THROUGH INDEX
  for (var i = 0; i < arr.length; i++) {
    var j = arr.slice(0, i);
    var l = arr.slice(i + 1, arr.length);
    // ADD THE LEFT SIDE AND THE RIGHT SIDE
    function add(a, b) {
      return a + b;
    }
    var sumLeft = j.reduce(add, 0);

    var sumRight = l.reduce(add, 0);

    // DOES IS EQUAL THE SAME
    if (sumLeft === sumRight) {
      return i;
    }
    if (i === arr.length - 1 && sumLeft !== sumRight) {
      return -1;
    }
  }
}




// test

const Test = require("@codewars/test-compat");

describe("FindEvenIndex", function () {
  it("Tests", function () {
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
      3,
      "The array was: [1,2,3,4,3,2,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 100, 50, -51, 1, 1]),
      1,
      "The array was: [1,100,50,-51,1,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 5, 6]),
      -1,
      "The array was: [1,2,3,4,5,6] \n"
    );
    Test.assertEquals(
      findEvenIndex([20, 10, 30, 10, 10, 15, 35]),
      3,
      "The array was: [20,10,30,10,10,15,35] \n"
    );
  });
});