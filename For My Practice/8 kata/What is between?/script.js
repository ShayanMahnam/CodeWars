// my solution

function between(a, b) {
  // your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}


// other solutions
const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

//

const between = (a, b) => [...Array(b - a + 1)].map((_, idx) => idx + a);

//

function between(a, b) {  
  const betweenArray = []
  
  while (a <= b) {
    betweenArray.push(a);
    a++;
  }
  
  return betweenArray;
}

//

function between(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (var i = min, arr = []; i <= max; arr.push(i++));
  return arr;
}

// test

describe("Basic tests", () => {
  it("between(1, 4)", () =>
    assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
  it("between(-2, 2)", () =>
    assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
});