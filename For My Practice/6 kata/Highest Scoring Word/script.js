// my solution

let as = s
  .split(" ")
  .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
return s.split(" ")[as.indexOf(Math.max(...as))];


// other solutions
function high(s) {
  // const scores ={
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   d: 4,
  //   e: 5,
  //   f: 6,
  //   g: 7,
  //   h: 8,
  //   i: 9,
  //   j: 10,
  //   k: 11,
  //   l: 12,
  //   m: 13,
  //   n: 14,
  //   o: 15,
  //   p: 16,
  //   q: 17,
  //   r: 18,
  //   s: 19,
  //   t: 20,
  //   u: 21,
  //   v: 22,
  //   w: 23,
  //   x: 24,
  //   y: 25,
  //   z: 26,
  // }
  // return x.split(' ').map(x=> x.split('')[scores])
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

//

function high(words) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const score = (word) =>
    word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(" ")
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}

//

function high(x) {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}

//

function high(x) {
  return x.split(" ").reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  });
}

function score(word) {
  return word.split("").reduce((accum, current) => {
    return accum + (current.charCodeAt() - 96);
  }, 0);
}

//

function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  const scores = words
    .map((x) => [...x].map((y) => alpha.indexOf(y) + 1))
    .map((x) => x.reduce((a, b) => a + b, 0));

  return words[scores.indexOf(Math.max(...scores))];
}



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high("man i need a taxi up to ubud"), "taxi");
    assert.strictEqual(
      high("what time are we climbing up the volcano"),
      "volcano"
    );
    assert.strictEqual(high("take me to semynak"), "semynak");
    assert.strictEqual(high("aa b"), "aa");
    assert.strictEqual(high("b aa"), "b");
    assert.strictEqual(high("bb d"), "bb");
    assert.strictEqual(high("d bb"), "d");
    assert.strictEqual(high("aaa b"), "aaa");
  });
});