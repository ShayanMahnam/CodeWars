// my solution

function iTri(s) {
  //its gonna be a long day!
  let distance = 140.6;
  if (s == 0) return "Starting Line... Good Luck!";
  if (s <= 2.4) return { Swim: `${(distance - s).toFixed(2)} to go!` };
  if (s <= 114.4) return { Bike: `${(distance - s).toFixed(2)} to go!` };
  if (s <= 130.6) return { Run: `${(distance - s).toFixed(2)} to go!` };
  if (s <= 140.6) return { Run: "Nearly there!" };
  return "You're done! Stop running!";
}


// other solutions

function iTri(s) {
  if (s === 0) return "Starting Line... Good Luck!";
  else if (s < 2.4) return { Swim: (140.6 - s).toFixed(2) + " to go!" };
  else if (s < 114.4) return { Bike: (140.6 - s).toFixed(2) + " to go!" };
  else if (s < 130.6) return { Run: (140.6 - s).toFixed(2) + " to go!" };
  else if (s < 140.6) return { Run: "Nearly there!" };
  else return "You're done! Stop running!";
}

//

const iTri = (s) =>
  s >= 140.6
    ? `You're done! Stop running!`
    : s
    ? {
        [s > 114.4 ? `Run` : s > 2.4 ? `Bike` : `Swim`]:
          s > 130.6 ? `Nearly there!` : (140.6 - s).toFixed(2) + ` to go!`,
      }
    : `Starting Line... Good Luck!`;

    //

    function iTri(s) {
      var distanceLeft = (140.6 - s).toFixed(2);
      if (s === 0) {
        return "Starting Line... Good Luck!";
      } else if (s > 0 && s <= 2.4) {
        return { Swim: distanceLeft + " to go!" };
      } else if (s > 2.4 && s <= 114.4) {
        return { Bike: distanceLeft + " to go!" };
      } else if (s > 114.4 && s < 130.6) {
        return { Run: distanceLeft + " to go!" };
      } else if (s >= 130.6 && s < 140.6) {
        return { Run: "Nearly there!" };
      } else if (s >= 140.6) {
        return "You're done! Stop running!";
      }
    }


// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Ironman Triathlon", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(iTri(36), { Bike: "104.60 to go!" });
    assert.deepEqual(iTri(103.5), { Bike: "37.10 to go!" });
    assert.deepEqual(iTri(0), "Starting Line... Good Luck!");
    assert.deepEqual(iTri(2), { Swim: "138.60 to go!" });
  });
});