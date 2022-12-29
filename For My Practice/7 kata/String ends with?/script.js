// my solution

function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}


// other solutions

const solution = (str, ending) => str.endsWith(ending);

//

function solution(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type";
  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}

//

function solution(str, ending) {
  return str.substr(-ending.length) == ending;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution("abcde", "cde"), true);
    Test.assertEquals(solution("abcde", "abc"), false);
  });
});
