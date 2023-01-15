// my solution

function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) {
      arr.push(i);
    }
  }
  return arr.length;
}


// other solutions
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

//

dontGiveMeFive = (s, e) => {
  for (var cnt = 0; s <= e; ++s) (s + "").includes("5") || cnt++;
  return cnt;
};

//

function dontGiveMeFive(start, end) {
  return Array.from(Array(end - start + 1), (e, i) => i + start).filter(
    (e) => ("" + e).indexOf("5") === -1
  ).length;
}




// test

const Test = require("@codewars/test-compat");

describe("KataTests", function () {
  it("exampleTests", function () {
    Test.assertEquals(dontGiveMeFive(1, 9), 8);
    Test.assertEquals(dontGiveMeFive(4, 17), 12);
  });
});