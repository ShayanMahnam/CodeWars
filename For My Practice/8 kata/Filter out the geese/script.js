// my solution
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(x => !geese.includes(x))
  // return an array containing all of the strings in the input array except those that match strings in geese
};



// other solutions

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};

//

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
var newArray = [];
  for (var i =0;i<birds.length;i++) {
  if (!geese.includes(birds[i])) {
    newArray.push(birds[i]);
  }

  
  }
return newArray;
};



// test

const Test = require("@codewars/test-compat");

describe("Basic tests", function () {
  it("Mixed list", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "Mallard",
        "Hook Bill",
        "African",
        "Crested",
        "Pilgrim",
        "Toulouse",
        "Blue Swedish",
      ]),
      ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    );
  });
  it("No geese", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "Mallard",
        "Barbary",
        "Hook Bill",
        "Blue Swedish",
        "Crested",
      ]),
      ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    );
  });
  it("All geese", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
      ]),
      []
    );
  });
});