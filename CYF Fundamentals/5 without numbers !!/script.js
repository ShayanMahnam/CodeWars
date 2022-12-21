//My Solution
function unusualFive() {
  return ["one", "two", "three", "four", "five"].length;
}
//correct answers
function unusualFive() {
  return "fucku".length;
}
//
const unusualFive = () => "How do you do bro?".split(" ").length;
//
function unusualFive() {
  return [..."Joker"].length;
}
//Sample Tests
describe("unusualFive", function () {
  it("should return 5", function () {
    assert.strictEqual(unusualFive(), 5);
  });
});
