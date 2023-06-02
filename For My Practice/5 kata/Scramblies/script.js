// my solution

function scramble(str1, str2) {
  const frequencyMap = {};

  // Create a frequency map of characters in str1
  for (let char of str1) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Check if all characters in str2 are present in str1 with sufficient frequency
  for (let char of str2) {
    if (!frequencyMap[char]) {
      return false;
    }
    frequencyMap[char]--;
  }

  return true;
}


// other solutions
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

//

function scramble(str1, str2) {
  var hashtab = [...new Array(256)].map((x) => 0);

  str2.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]++);
  str1.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]--);

  hashtab = hashtab.filter((x) => x > 0);

  return hashtab.length == 0;
}

//

function scramble(str1, str2) {
  let str1Hash = {};
  let containsScramble = true;
  for (const char1 of str1) {
    str1Hash[char1] ? (str1Hash[char1] += 1) : (str1Hash[char1] = 1);
  }

  for (const char2 of str2) {
    str1Hash[char2] ? (str1Hash[char2] -= 1) : (containsScramble = false);
  }

  return containsScramble;
}

//

function scramble(str1, str2) {
  const alphaArr = Array(26).fill(0);

  str2.split("").forEach((s) => alphaArr[s.charCodeAt() - 97]++);
  str1.split("").forEach((s) => alphaArr[s.charCodeAt() - 97]--);

  return alphaArr.every((v) => v <= 0);
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  it("Tests", () => {
    assert.strictEqual(scramble("rkqodlw", "world"), true);
    assert.strictEqual(scramble("cedewaraaossoqqyt", "codewars"), true);
    assert.strictEqual(scramble("katas", "steak"), false);
    assert.strictEqual(scramble("scriptjavx", "javascript"), false);
    assert.strictEqual(scramble("scriptingjava", "javascript"), true);
    assert.strictEqual(scramble("scriptsjava", "javascripts"), true);
    assert.strictEqual(scramble("javscripts", "javascript"), false);
    assert.strictEqual(scramble("jscripts", "javascript"), false);
    assert.strictEqual(scramble("aabbcamaomsccdd", "commas"), true);
    assert.strictEqual(scramble("commas", "commas"), true);
    assert.strictEqual(scramble("sammoc", "commas"), true);
  });

  it("Large inputs test", () => {
    let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
    let s2 = "zyxcba".repeat(9_000);
    assert.strictEqual(scramble(s1, s2), true);
  });
});