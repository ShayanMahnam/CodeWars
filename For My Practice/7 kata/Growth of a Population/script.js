// my solution

function nbYear(p0, percent, aug, p, years = 0) {
  return p0 >= p
    ? years
    : nbYear(
        Math.floor(p0 + p0 * (percent / 100)) + aug,
        percent,
        aug,
        p,
        years + 1
      );
}


// other solutions
function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

//

function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    count++;
  }
  return count;
}




// test

const Test = require("@codewars/test-compat");

describe("nbYear", function () {
  it("Basic tests", function () {
    Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
    Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
    Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
  });
});