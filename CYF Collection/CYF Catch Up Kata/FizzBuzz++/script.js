// my solution

function fizzbuzzPlusPlus(numbers, words) {
  let arrayLength = numbers.reduce((a, b) => a * b);
  let array = [];
  for (let i = 1; i <= arrayLength; i++) {
    let str = "";
    for (let j = 0; j < numbers.length; j++) {
      if (i % numbers[j] === 0) {
        str += words[j];
      }
    }
    array.push(str || i);
  }
  return array;
}


// other solutions
function fizzbuzzPlusPlus(numbers, words) {
  let result = [];
  let n = 1;
  for (number of numbers) {
    n *= number;
  }
  for (let i = 1; i <= n; i++) {
    let newWords = [];
    for (j = 0; j < words.length; j++) {
      if (i % numbers[j] === 0) {
        newWords.push(words[j]);
      }
    }
    if (newWords.length === 0) {
      result.push(i);
    } else {
      result.push(newWords.join(""));
    }
  }
  return result;
}

//

const fizzbuzzPlusPlus = (nums, words) =>
  [...Array(nums.reduce((a, b) => a * b)).keys()].map(
    (x) =>
      nums.map((v, i) => ((x + 1) % v === 0 ? words[i] : "")).join("") || x + 1
  );

  //
const fizzbuzzPlusPlus = (nums, words) =>
  Array.from(
    { length: nums.reduce((a, b) => a * b) + 1 },
    (_, i) => nums.reduce((a, n, j) => a + (i % n ? "" : words[j]), "") || i
  ).slice(1);

  //

  function fizzbuzzPlusPlus(n, w, a = [], c = 1, s = "") {
    while (c) {
      for (let i = 0; i < n.length; i++) {
        if (c % n[i] === 0) s += w[i];
      }
      if (s) {
        a.push(s);
        s = "";
        c++;
      } else {
        a.push(c);
        c++;
      }
      if (a.includes(w.join``)) return a;
    }
  }





// test

const Test = require("@codewars/test-compat");

describe("Regular FizzBuzz", function () {
  it("Should return the definition of fizzbuzz", function () {
    Test.assertSimilar(fizzbuzzPlusPlus([3, 5], ["fizz", "buzz"]), [
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
});

describe("FizzBuzz++", function () {
  it("Should return the definition of fizzbuzz++", function () {
    Test.assertSimilar(fizzbuzzPlusPlus([2, 3, 5], ["fizz", "buzz", "bazz"]), [
      1,
      "fizz",
      "buzz",
      "fizz",
      "bazz",
      "fizzbuzz",
      7,
      "fizz",
      "buzz",
      "fizzbazz",
      11,
      "fizzbuzz",
      13,
      "fizz",
      "buzzbazz",
      "fizz",
      17,
      "fizzbuzz",
      19,
      "fizzbazz",
      "buzz",
      "fizz",
      23,
      "fizzbuzz",
      "bazz",
      "fizz",
      "buzz",
      "fizz",
      29,
      "fizzbuzzbazz",
    ]);
  });
});