// my solution

function reverse(string){
  //your code here
  return string.split(' ').reverse().join(' ')
}


// other solutions
function reverse(string){
  // validate input
  if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
  // just use the dumb way out since it's jabbascripps
  return string.split(' ').reverse().join(' ');
}

//

function reverse(string){
    var s = string;
    s = s.split(' ');
    s = s.reverse();
    s = s.join(' ');
    return s;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    assert.strictEqual(reverse('no one cares'), 'cares one no');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('CodeWars'), 'CodeWars');
  })
})