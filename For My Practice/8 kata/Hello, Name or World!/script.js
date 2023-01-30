// my solution
function hello(name) {
  return name === '' || name === "name" || typeof name !== "string"? `Hello, World!` : `Hello, ${name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}!`;
}

// other solutions

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

//

function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}



// test

const assert = require('chai').assert;
describe("Sample Tests", () => {
  it("should work for sample inputs", () => {
    let actualJohn = hello('johN');
    assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
  });
});
