// my solution

function removeChar(str){
 //You got this!
  return str.slice(1,str.length-1)
};



// other solutions
function removeChar(str) {
  return str.slice(1, -1);
}

//

const removeChar = (str) => str.slice(1, -1);

//

function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
    
};




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen");
    assert.strictEqual(removeChar("country"), "ountr");
    assert.strictEqual(removeChar("person"), "erso");
    assert.strictEqual(removeChar("place"), "lac");
    assert.strictEqual(removeChar("ooopsss"), "oopss");
  });
});
 