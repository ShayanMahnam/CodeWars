// my solution

function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((x) => x + x)
    .join("");
}



// other solutions
function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};

//

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

//


function doubleChar(str) {
  return [...str].map((v) => v + v).join("");
}



// test

const Test = require("@codewars/test-compat");

describe("doubleChar", function () {
  it("works for some examples", function () {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});
