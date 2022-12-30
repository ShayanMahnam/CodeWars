// my solution
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}



// other solutions
const goals = (...a) => a.reduce((s, v) => s + v, 0);

//

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = [laLigaGoals, copaDelReyGoals, championsLeagueGoals];
  return goals.reduce((a, b) => a + b, 0);
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(goals(0, 0, 0), 0);
    Test.assertEquals(goals(43, 10, 5), 58);
  });
});
