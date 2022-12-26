// my solution

function toCamelCase(str) {
  // let arr;

  //   if(str === '') return ''

  // if(str.indexOf('-') !== -1){
  //      arr = str.split('-')
  //    }
  // else {
  //    arr = str.split('_')
  // }

  // let firstEl = arr[0]
  //   for( let i = 1; i < arr.length; i++){
  //     firstEl += arr[i][0].toUpperCase()+arr[i].slice(1);
  //   }
  //   return firstEl
  let newStr = "";
  if (str) {
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
}


// other solutions
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

//

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
}




// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    assert.strictEqual(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});
