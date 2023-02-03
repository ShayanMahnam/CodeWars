// my solution

function makeMove(sticks) {
  if (sticks % 4 == 0) {
    return Math.random() * 3 + 1;
  }
  return sticks % 4
}


// other solutions
const makeMove = sticks =>  sticks <= 3 ? sticks : sticks - Math.floor(sticks / 4) * 4;

//

function makeMove(sticks) {
  /*if (sticks % 4 == 0) {
    return Math.random() * 3 + 1
  }*/
  return sticks % 4
}

//

function makeMove(sticks) {
 if (sticks % 4 === 1) {
    return 1;
  } else if (sticks % 4 === 2) {
    return 2;
  } else if (sticks % 4 === 3) {
    return 3;
  }
}




// test

const {assert} = require('chai');

describe('Tests', () => {
  it('Sample Tests', () => {
    const legalMoves = [1, 2, 3];
    for (let sticks = 1; sticks <= 3; sticks++) {
      const actual = makeMove(sticks);
      assert.oneOf(actual, legalMoves, `Illegal move for sticks = ${sticks}`);
      assert.strictEqual(actual, sticks, `Suboptimal move for sticks = ${sticks}`);
    }
  });
});