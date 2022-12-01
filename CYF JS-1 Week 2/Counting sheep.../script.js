//My Solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((x) => x == true).length;
}
//Other answers
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}
//
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
//
function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}
//
let countSheeps = (x) => x.filter((s) => s).length;
//Sample Tests
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var array1 = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];

    Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total");
  });
});
