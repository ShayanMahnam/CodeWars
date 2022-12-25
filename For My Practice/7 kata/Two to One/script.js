// my solution


const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");


// other solutions

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

//

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1];
  });
  return s4.join("");
}

//

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]); //test
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
}



// test

const Test = require("@codewars/test-compat");

describe("longest", function () {
  it("Basic tests", function () {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    Test.assertEquals(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    Test.assertEquals(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});