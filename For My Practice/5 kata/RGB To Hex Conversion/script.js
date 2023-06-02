// my solution

function rgb(r, g, b) {
  // Round the values to the closest valid range (0 - 255)
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert the decimal values to hexadecimal strings
  const hexR = r.toString(16).padStart(2, "0").toUpperCase();
  const hexG = g.toString(16).padStart(2, "0").toUpperCase();
  const hexB = b.toString(16).padStart(2, "0").toUpperCase();

  // Return the hexadecimal representation
  return hexR + hexG + hexB;
}


// other solutions
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}

//
function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
//

const rgb = (...arg) =>
  arg
    .map((it) =>
      Math.max(Math.min(it, 255), 0).toString(16).padStart(2, "0").toUpperCase()
    )
    .join("");

// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), "000000");
    Test.assertEquals(rgb(0, 0, -20), "000000");
    Test.assertEquals(rgb(300, 255, 255), "FFFFFF");
    Test.assertEquals(rgb(173, 255, 47), "ADFF2F");
  });
});
