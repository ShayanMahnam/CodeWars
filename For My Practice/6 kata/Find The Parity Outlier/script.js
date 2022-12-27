// my solution

function findOutlier(integers) {
  //your code here
  return integers.filter((x) => x % 2 === 0).length > 1
    ? Number(integers.filter((x) => x % 2 !== 0))
    : Number(integers.filter((x) => x % 2 === 0));
}


// other solutions
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

//
function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);
}
function even(num) {
  return num % 2 == 0;
}
function odd(num) {
  return !even(num);
}

//

function findOutlier(integers) {
  var res;
  var odd = integers.filter(function (e) {
    if (e % 2 != 0) {
      res = e;
    }
    return e % 2 == 0;
  });

  return odd.length > 1 ? res : odd.pop();
}

//

function findOutlier(int) {
  var evens = [],
    odds = [];
  int.forEach(function (num) {
    num % 2 != 0 ? odds.push(num) : evens.push(num);
  });
  return odds.length > 1 ? evens[0] : odds[0];
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1);
    Test.assertEquals(findOutlier([1, 2, 3]), 2);
    Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
    Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
    Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
  });
});
