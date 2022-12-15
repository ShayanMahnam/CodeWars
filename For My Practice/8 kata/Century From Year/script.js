// my solution

function century(year) {
  // Finish this :)

  return ((year + 99) / 100) | 0;
}


// other solutions

const century = (year) => Math.ceil(year / 100);
//

const century = (year) =>
  year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;
  
//

function century(year) {
    var century = 0;

    for (var i = 0; i < year; i++) {
      if (i % 100 == 0) {
        century++;
      }
    }
    return century;
  }



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(century(1705), 18, "Testing for year 1705");
    Test.assertEquals(century(1900), 19, "Testing for year 1900");
    Test.assertEquals(century(1601), 17, "Testing for year 1601");
    Test.assertEquals(century(2000), 20, "Testing for year 2000");
    Test.assertEquals(century(89), 1, "Testing for year 89");
  });
});