// my solution

function breakChocolate(n, m) {
  return n == 0 || m == 0 ? 0 : n * m - 1;
}


// other solutions

var breakChocolate = function (n, m) {
  return n * m === 0 ? 0 : n * m - 1;
};

///

var breakChocolate = function (n, m) {
  return Math.max(0, m * n - 1);
};

//

var breakChocolate = function (n, m) {
  // input is invalid if either input is less than 1
  if (n < 1 || m < 1) {
    return 0;
  }

  /* Some example cases to spot the pattern: 
 
 2 x 1  2 x 2   2 x 3     2 x 4       2 x 5         2 x 6           2 x 7     
   _     _ _    _ _ _    _ _ _ _    _ _ _ _ _    _ _ _ _ _ _    _ _ _ _ _ _ _ 
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
                                  
   1      3       5         7           9             11              13

Minimum breaks = ( rows x columns ) - 1
   */
  return m * n - 1;
};



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(breakChocolate(5, 5), 24);
    Test.assertEquals(breakChocolate(1, 1), 0);
  });
});
