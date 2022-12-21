//My Solution
function ifChuckSaysSo() {
  return !true;
}

//correct answers
function ifChuckSaysSo() {
  return !1;
}
//
let ifChuckSaysSo = () => !true;
//
function ifChuckSaysSo() {
  return "This" === "Silly";
}
///Sample Tests
describe("Example tests", () => {
  Test.assertEquals(ifChuckSaysSo(), false);
});

