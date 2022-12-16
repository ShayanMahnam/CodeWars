// my solution


function filter_list(l) {
  // Return a new array with the strings filtered out

  return l.filter((el) => {
    if (typeof el === "number") {
      return true;
    }
  });
}

// other solutions

function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

//

function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}

//

function filter_list(l) {
  return l.filter((i) => typeof i !== "string");
}



// test

const assert = require("chai").assert;
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      filter_list([1, 2, "a", "b"]),
      [1, 2],
      'For input [1,2,"a","b"]'
    );
    assert.deepEqual(
      filter_list([1, "a", "b", 0, 15]),
      [1, 0, 15],
      'For input [1,"a","b",0,15]'
    );
    assert.deepEqual(
      filter_list([1, 2, "aasf", "1", "123", 123]),
      [1, 2, 123],
      'For input [1,2,"aasf","1","123",123]'
    );
  });
});