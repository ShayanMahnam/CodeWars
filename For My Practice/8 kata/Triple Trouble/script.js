// my solution

function tripleTrouble(one, two, three){
  //Solution
  let result = ''
  for(let i = 0; i < one.length; i++){
    result += one[i] + two[i] + three[i]
  }
  return result
 }


// other solutions

function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

//

const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

///

function tripleTrouble(one, two, three){
  return one.replace(/./g,(v,i)=>v+two[i]+three[i])
 }



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 
    assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
  });
})
