// my solution
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return { status: msg };
}



// other solutions

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg,
  };
}

//

const getStatus = (isBusy) => ({ status: isBusy ? "busy" : "available" });

//

function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" };
}



// test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(getStatus(true).status, "busy");
  });
});
