// my solution
function calculateTotal(team1, team2) {
  var t1s = team1.reduce((t, c) => t + c, 0);
  var t2s = team2.reduce((t, c) => t + c, 0);
  return t1s > t2s;
}



// other solutions

function calculateTotal(team1, team2) {
  var f = (prev, curr) => prev + curr;
  var t1s = team1.reduce(f, 0);
  var t2s = team2.reduce(f, 0);
  return t1s > t2s;
}

//

let calculateTotal = (team1, team2) =>
  team1.reduce((t, c) => t + c, 0) > team2.reduce((t, c) => t + c, 0);



// test

describe("Fixed Tests", () => {
  Test.assertEquals(
    calculateTotal([1, 2, 2], [1, 0, 0]),
    true,
    "Calculate the Winner!"
  );
  Test.assertEquals(
    calculateTotal([6, 45, 1], [1, 55, 0]),
    false,
    "Calculate the Winner!"
  );
  Test.assertEquals(
    calculateTotal([57, 2, 1], []),
    true,
    "Calculate the Winner!"
  );
  Test.assertEquals(
    calculateTotal([], [3, 4, 3]),
    false,
    "Calculate the Winner!"
  );
});