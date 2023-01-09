// my solution
function solution(a, b) {
  // your code here
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}



// other solutions

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

//

// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);



// test
const Test = require("@codewars/test-compat");

describe("Sample tests", function () {
  it("Should pass sample tests", function () {
    Test.assertEquals(solution("45", "1"), "1451");
    Test.assertEquals(solution("13", "200"), "1320013");
    Test.assertEquals(solution("Soon", "Me"), "MeSoonMe");
    Test.assertEquals(solution("U", "False"), "UFalseU");
  });
});
    