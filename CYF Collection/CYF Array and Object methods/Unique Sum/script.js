// my solution

function uniqueSum(lst) {
  //your magic code goes here
  let newLst = lst.sort((a, z) => a - z).filter((a, i) => a !== lst[i + 1]);
  return newLst.reduce((prev, cur) => prev + cur, null);
}


// other solutions
function uniqueSum(lst) {
  return [...new Set(lst)].reduce((a, b) => a + b, null);
}

//

function uniqueSum(lst) {
  return lst.length > 0 ? [...new Set(lst)].reduce((s, n) => s + n, 0) : null;
}

//

function uniqueSum(lst) {
  return lst
    .filter((a, b, c) => c.indexOf(a) == b)
    .reduce((a, b) => a + b, null);
}

//





// test

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(uniqueSum([1, 2, 3]), 6);
    Test.assertEquals(uniqueSum([1, 3, 8, 1, 8]), 12);
    Test.assertEquals(uniqueSum([-1, -1, 5, 2, -7]), -1);
    Test.assertEquals(uniqueSum([]), null);
  });
});
