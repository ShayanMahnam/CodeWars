// my solution

function lookSay(n) {
  //TODO
  if (n === 0) {
    return 10;
  }
  let result = "";
  let count = 1;
  n = n.toString() + " ";
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] === n[i + 1]) {
      count++;
    } else {
      result += count.toString() + n[i];
      count = 1;
    }
  }
  return parseInt(result);
}


// other solutions

function lookSay(n) {
  return +("" + n).replace(/((\d)\2*)/g, function (m) {
    return m.length + m[0];
  });
}

//

function lookSay(n) {
  return parseInt(
    ("" + n).replace(/((\d)\2*)/g, function (m) {
      return m.length + m[0];
    })
  );
}

//

function lookSay(number) {
  return +`${number}`.replace(/(\d)\1*/g, (m) => m.length + m[0]);
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(lookSay(0), 10);
    Test.assertEquals(lookSay(2014), 12101114);
    Test.assertEquals(lookSay(1122), 2122);
    Test.assertEquals(lookSay(22322), 221322);
  });
});
