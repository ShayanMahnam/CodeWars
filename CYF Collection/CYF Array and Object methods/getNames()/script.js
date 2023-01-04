// my solution
function getNames(data) {
  return data.map((item) => item.name);
}



// other solutions
function getNames(data) {
  return data.map(function (item) {
    return item.name;
  });
}

//






// test

const Test = require("@codewars/test-compat");

describe("getNames(data)", function () {
  it("should return the names of the people passed in", function () {
    const data = [
      { name: "Joe", age: 20 },
      { name: "Bill", age: 30 },
      { name: "Kate", age: 23 },
    ];
    Test.assertSimilar(getNames(data), ["Joe", "Bill", "Kate"]);
  });
});
