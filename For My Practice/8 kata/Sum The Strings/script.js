// my solution

function sumStr(a, b) {
  return String(+a + +b);
}


// other solutions
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

//

function sumStr(a, b) {
  return +a + +b + "";
}

//

function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("4", "5"), "9");
    assert.strictEqual(sumStr("34", "5"), "39");
  });
});
