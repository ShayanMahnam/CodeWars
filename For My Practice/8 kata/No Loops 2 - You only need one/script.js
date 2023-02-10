// my solution

function check(a,b){
  return a.includes(b);
};


// other solutions

const check = (a,x) => a.includes(x);



// test

const { assert } = require('chai');

describe("Basic tests",() =>{
  it('Sample tests', () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  });
})