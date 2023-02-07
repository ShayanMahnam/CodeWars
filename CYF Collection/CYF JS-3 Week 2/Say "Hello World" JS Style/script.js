// my solution

var say = function(string1) {
  return function (name) {
    return string1 + " " + name;
  };
}


// other solutions

var say = function(string1) {
  return function(string2) {
    return string1 + ' ' + string2;
  }
}

//

var say = function(string1) {
  return function (string2) {
    return [string1, string2].join(' ');
  }
}

//

const say = string1 => string2 => `${string1} ${string2}`;



// test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(say('Hello')('World'), 'Hello World');
  });
});
