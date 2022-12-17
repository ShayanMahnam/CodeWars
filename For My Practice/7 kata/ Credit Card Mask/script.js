// my solution

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}


// other solutions

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}
//

function maskify(cc) {
  cc = cc.split("");
  for (var i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }

  cc = cc.join("");
  return cc;
}

//





// test

const Test = require("@codewars/test-compat");

describe("maskify", function () {
  it("should work for some examples", function () {
    Test.assertEquals(maskify("4556364607935616"), "############5616");
    Test.assertEquals(maskify("1"), "1");
    Test.assertEquals(maskify("11111"), "#1111");
  });
});