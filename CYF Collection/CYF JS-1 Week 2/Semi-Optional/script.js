//My Solution
function wrap(value) {
  return {
    value: value,
  };
}
//Other answers
const wrap = (value) => ({ value });
//
function wrap(value) {
  return { value };
}
//
function wrap(v) {
  var object = {
    value: v,
  };
  return object;
}
//
function wrap(value) {
  //Converted key to string to avoid original conflicting key value name
  return { value: value };
}
//Sample Tests
describe("Fixed tests", function () {
  const res = wrap("MyTest");
  Test.assertEquals(typeof res, "object", "Doesn't return an object");
  Test.assertEquals(res.value, "MyTest");
  Test.assertEquals(wrap(343).value, 343);
  var obj = { test: "testy" };
  Test.assertEquals(wrap(obj).value, obj);
});

