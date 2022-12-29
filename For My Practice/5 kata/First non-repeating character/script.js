// my solution

// function firstNonRepeatingLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//         if(str.toLowerCase().indexOf(str.charAt(i)) == str.toLowerCase().lastIndexOf(str.charAt(i))) {
//             return str.charAt(i)
//         }
//     }
//     return '' 
// }

function firstNonRepeatingLetter(s) {
  var repeatObj = {};
  var foundIndex = false;
  var indexVal;
  
  s.toLowerCase().split('').find((element,index,arr) => {
    if (!repeatObj[element]) {
      if (arr.indexOf(element,index+1) ==-1) {
        indexVal = index;
        foundIndex = true;
        return element;
      } else {
        repeatObj[element] = true;
      }
    }
  });
  if (foundIndex) return s.substr(indexVal,1);
  return '';
}


// other solutions
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}

//

function firstNonRepeatingLetter(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
}

//

function firstNonRepeatingLetter(str) {
  return (
    str
      .split("")
      .find((e) => str.match(new RegExp(`${e}`, "gi")).length === 1) || ""
  );
}

//

const firstNonRepeatingLetter = (s) =>
  s[
    [...s.toLowerCase()].findIndex(
      (c, _, s) => s.indexOf(c) === s.lastIndexOf(c)
    )
  ] || "";




// test

const Test = require("@codewars/test-compat");

describe("Simple Tests", function () {
  it("should handle simple tests", function () {
    Test.assertEquals(firstNonRepeatingLetter("a"), "a");
    Test.assertEquals(firstNonRepeatingLetter("stress"), "t");
    Test.assertEquals(firstNonRepeatingLetter("moonmen"), "e");
  });
});