// my solution


function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // return number of vowels
  return count;
}


// other solutions


function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

//

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

//

function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

//

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function (x) {
    if ((x == "a") | (x == "e") | (x == "i") | (x == "o") | (x == "u")) {
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}



// test

const { assert } = require("chai");

describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});