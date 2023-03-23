// my solution

function dirReduc(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")
    ) {
      arr.splice(i, 2);
      count++;
      i--;
    }
  }
  return count === 0 ? arr : dirReduc(arr);
}


// other solutions
function dirReduc(arr) {
  let str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

//

function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

//

function dirReduc(arr) {
  var opposite = { SOUTH: "NORTH", NORTH: "SOUTH", WEST: "EAST", EAST: "WEST" };
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b);
    return a;
  }, []);
}

//

function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i] + arr[i + 1]) {
      case "EASTWEST":
        arr.splice(i, 2);
        i = i - i - 1; // ( i = -1 ) => reset the loop to scan the array from i=0
        break;

      case "WESTEAST":
        arr.splice(i, 2);
        i = i - i - 1;
        break;

      case "NORTHSOUTH":
        arr.splice(i, 2);
        i = i - i - 1;
        break;

      case "SOUTHNORTH":
        arr.splice(i, 2);
        i = i - i - 1;
        break;
    }
  }
  return arr;
}


// test

const chai = require("chai");
chai.config.truncateThreshold = 0;
const deeepEqual = chai.assert.deepEqual;

function doTest(input, expected) {
  const log = `for ${JSON.stringify(input)}\n`;
  const actual = dirReduc(input);
  deeepEqual(actual, expected, log);
}

describe("Tests", () => {
  it("test", () => {
    doTest(
      ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
      ["WEST"]
    );
    doTest(
      ["NORTH", "WEST", "SOUTH", "EAST"],
      ["NORTH", "WEST", "SOUTH", "EAST"]
    );
    doTest(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
  });
});
