// my solution

function xor(a, b) {
    // TODO: Program Me
    return (a && !b) || ( !a && b)
  }


// other solutions

function xor(a, b) {
    return a != b;
  }

//

const xor = (a, b) => !!(a ^ b)

//

function xor(a, b) {
    if ((a === true) && (b !== true)){
    return true
    } else if ((a !== true) && (b === true)){
    return true
    } else {
    return false
    }
  }



// test

describe("Your 'xor' function/operator", () => {
    it("should work for the four basic cases described above", () => {
      Test.assertEquals(xor(false, false), false, "false xor false === false");
      Test.assertEquals(xor(true, false), true, "true xor false === true");
      Test.assertEquals(xor(false, true), true, "false xor true === true");
      Test.assertEquals(xor(true, true), false, "true xor true === false");
      Test.assertNotEquals(xor(true, true), true, "'xor' is NOT identical to 'or'");
    });
  });