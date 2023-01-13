// my solution

function solution(str) {
  var arr = str.split("");
  var res = [];

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) res.push(arr[i] + arr[i + 1]);
    else res.push(arr[i] + "_");
  }

  return res;
}


// other solutions

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

//

function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

//

function solution(str) {
  return str
    .split("")
    .map((e, i) => (i % 2 === 0 ? e + (str[i + 1] || "_") : false))
    .filter((e) => e);
}

//

function solution(str) {
  let arr = [];
  for (let i = 0; i < str.split("").length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }

  return arr.map((v) => (v.length === 1 ? v + "_" : v));
}



// test
const { assert } = require("chai");

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});