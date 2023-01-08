// my solution

function findMultiples(integer, limit) {
  //your code here
  let arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}


// other solutions

function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

//

function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}

//

const findMultiples = (integer, limit) =>
  [...Array((limit / integer) ^ 0)].map((_, idx) => ++idx * integer);



// test

const { assert } = require("chai");
it("Basic Tests", () => {
  assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25]);
  assert.sameOrderedMembers(findMultiples(1, 2), [1, 2]);
  assert.sameOrderedMembers(findMultiples(5, 7), [5]);
  assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
  assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44]);
});