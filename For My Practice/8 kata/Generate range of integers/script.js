// my solution

function generateRange(min, max, step) {
  let range = [];
  while (min <= max) {
    range.push(min);
    min += step;
  }
  return range;
}


// other solutions
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

//

function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}




// test

describe("generateRange(2, 10, 2)", function () {
  Test.assertSimilar(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
});