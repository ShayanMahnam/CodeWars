// my solution
//refer to the example and write your first JS function
function helloWorld(){
  let str = "Hello World!"
  console.log(str)
}



// other solutions

let helloWorld = () => {
  var str = "Hello World!";
  console.log(str);
};

//

const helloWorld = (_) => {
  let str = 0;
  console.log("Hello World!");
};



// test

const { assert } = require("chai");
describe("Tests", () => {
  it("test", () => {
    assert.isFunction(helloWorld, "function helloWorld is not defined");
    helloWorld();
  });
});
