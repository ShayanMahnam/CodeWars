// my solution

const generateShape = (integer) =>
  ("+".repeat(integer) + "\n").repeat(integer).trim();





// other solutions
function generateShape(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}

//

function generateShape(int) {
  var ans = "";
  for (var i = 0; i < int; ++i) {
    for (var j = 0; j < int; ++j) ans += "+";
    if (i != int - 1) ans += "\n";
  }
  return ans;
}

//

function generateShape(int) {
  return Array(int)
    .fill(Array(int + 1).join("+"))
    .join("\n");
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      generateShape(8),
      "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
    );
  });
});
