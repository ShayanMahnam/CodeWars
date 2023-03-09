// my solution
var FilterNumbers = function (str) {
  return str.replace(/[0-9]/g, "");
};



// other solutions
var FilterNumbers = function (str) {
  return str
    .split("")
    .filter((c) => isNaN(c))
    .join("");
};

//

let FilterNumbers = function (str) {
  let res = str
    .split("")
    .filter((c) => !Number(c))
    .join("")
    .replace(/0/g, "");
  return res;
};

//

const FilterNumbers = (s) => s.split(/[0-9]/).join("");

//


var FilterNumbers = function (str) {
  return str
    .split("")
    .filter((c) => c != parseInt(c))
    .join("");
};

// test
describe("Fixed Tests", () => {
  Test.assertEquals(FilterNumbers("test123"), "test", "Just return the string");
  Test.assertEquals(FilterNumbers("a1b2c3"), "abc", "Just return the string");
  Test.assertEquals(
    FilterNumbers("aa1bb2cc3dd"),
    "aabbccdd",
    "Just return the string"
  );
});