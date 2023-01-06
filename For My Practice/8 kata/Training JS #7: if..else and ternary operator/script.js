// my solution

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}


// other solutions
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

//

function saleHotdogs(n) {
  var money = 0;
  if (n < 5) {
    money = n * 100;
  } else if (n >= 5 && n < 10) {
    money = n * 95;
  } else if (n >= 10) {
    money = n * 90;
  }
  return money;
}




// test
const { assert } = require("chai");

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(saleHotdogs(1), 100);
    assert.strictEqual(saleHotdogs(4), 400);
    assert.strictEqual(saleHotdogs(5), 475);
    assert.strictEqual(saleHotdogs(9), 855);
    assert.strictEqual(saleHotdogs(10), 900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});
