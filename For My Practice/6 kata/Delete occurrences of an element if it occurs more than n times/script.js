// my solution

function deleteNth(arr, x) {
  // ...
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}


// other solutions
const deleteNth = (a, x) => {
  let m = {};
  return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
};

//
function deleteNth(arr, x) {
  var obj = {};
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    return obj[number] <= x;
  });
}

//
function deleteNth(arr, x) {
  return arr.reduce(function (a, v) {
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z) {
  return arr.filter(function (q) {
    return z == q;
  }).length;
}

//

function deleteNth(arr, x) {
  while (true) {
    for (var i = 0; i < arr.length; ++i) {
      var count = 0;

      for (var j = 0; j < arr.length; ++j) {
        if (arr[i] === arr[j]) {
          ++count;

          if (count > x) {
            arr.splice(j, 1);
            break;
          }
        }
      }
      if (j !== arr.length) break;
    }
    if (i === arr.length) break;
  }

  return arr;
}





// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    assert.sameOrderedMembers(
      deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
      [1, 1, 3, 3, 7, 2, 2, 2]
    );
  });
});
