//My Solution
function mystery() {
  return { sanity: "Hello" };
}
//correct answers
function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
//
function mystery() {
  var result = { sanity: "Hello" };
  return result;
}
//
const mystery = () => ({ sanity: "Hello" });
//Sample Tests
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(
      mystery(),
      { sanity: "Hello" },
      "Mystery has not returned to sanity"
    );
  });
});
