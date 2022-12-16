// my solution

function XO(str) {
  //code here
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
}


// other solutions

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}

//

function XO(str) {
  return str.replace(/o/gi, "").length == str.replace(/x/gi, "").length;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(XO("xo"), true);
    Test.assertEquals(XO("xxOo"), true);
    Test.assertEquals(XO("xxxm"), false);
    Test.assertEquals(XO("Oo"), false);
    Test.assertEquals(XO("ooom"), false);
  });
});
