// my solution

function wordscore(word) {
  let points = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };

  return (
    word.split("").reduce((a, b) => a + points[b], 0) * word.length +
    (word.length >= 7 ? 50 : 0)
  );
}


// other solutions
const points = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

function wordscore(word) {
  const bonus = word.length == 7 ? 50 : 0;
  return (
    word.split("").reduce((acc, c) => acc + points[c], 0) * word.length + bonus
  );
}

//

function wordscore(word) {
  let x = word.split("");
  const len = x.length;
  let sum = 0;
  const score = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };
  Object.entries(score).forEach(([key, value]) => {
    for (let i = 0; i < len; i++) {
      if (x[i] === key) sum += value;
    }
  });
  return len === 7 ? sum * len + 50 : sum * len;
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      wordscore("great"),
      30,
      "The expected score for 'great' was 30. "
    );
    Test.assertEquals(
      wordscore("deceive"),
      141,
      "'deceive' is seven letters, the expected result was 141"
    );
    Test.assertEquals(
      wordscore("melon"),
      35,
      "The expected score for 'melon' was 35."
    );
  });
});
