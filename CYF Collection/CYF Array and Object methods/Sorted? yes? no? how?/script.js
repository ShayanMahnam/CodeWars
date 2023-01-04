// my solution

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}


// other solutions
const isSortedAndHow = (array) => {
  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
};


///

const isSortedAndHow = (a) => {
  const s = a.join``;
  return s === a.sort((x, y) => x - y).join``
    ? "yes, ascending"
    : s === a.sort((x, y) => y - x).join``
    ? "yes, descending"
    : "no";
};

///

function isSortedAndHow(array) {
  var ans;
  if (array[1] > array[0]) {
    ans = "yes, ascending";
  }

  if (ans === "yes, ascending") {
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= array[i - 1]) {
        ans = "yes, ascending";
      } else return (ans = "no");
    }
  }
  if (ans !== "yes, ascending") {
    for (var i = 1; i < array.length; i++) {
      if (array[i] <= array[i - 1]) {
        ans = "yes, descending";
      } else return (ans = "no");
    }
  }
  return ans;
}




// test

const Test = require("@codewars/test-compat");

describe("isSortedAndHow", function () {
  it("[1, 2]", function () {
    Test.assertEquals(isSortedAndHow([1, 2]), "yes, ascending");
  });

  it("[15, 7, 3, -8]", function () {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), "yes, descending");
  });

  it("[4, 2, 30]", function () {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), "no");
  });
});