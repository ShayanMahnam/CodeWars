// my solution

function litres(time) {
  return Math.floor(time / 2);
}


// other solutions

function litres(time) {
  return Math.floor(time * 0.5);
}

//

litres = (t) => ~~(t / 2);

//

function litres(time) {
  return parseInt(time / 2);
}

//

var litres = (a) => Math.floor(a * 0.5);



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("Tests", () => {
    assert.strictEqual(litres(2), 1, "should return 1 litre");
    assert.strictEqual(litres(1.4), 0, "should return 0 litres");
    assert.strictEqual(litres(12.3), 6, "should return 6 litres");
    assert.strictEqual(litres(0.82), 0, "should return 0 litres");
    assert.strictEqual(litres(11.8), 5, "should return 5 litres");
    assert.strictEqual(litres(1787), 893, "should return 893 litres");
    assert.strictEqual(litres(0), 0, "should return 0 litres");
  });
});