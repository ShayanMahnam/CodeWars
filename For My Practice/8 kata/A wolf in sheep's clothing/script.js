// my solution
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let index = queue.findIndex((x) => x == "wolf");
    return `Oi! Sheep number ${
      queue.length - index - 1
    }! You are about to be eaten by a wolf!`;
  }
}



// other solutions

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}


//

function warnTheSheep(queue) {
  let sheepIndex = queue.length - queue.indexOf("wolf") - 1;
  if (sheepIndex === 0) return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}
// test
const strictEqual = require("chai").assert.strictEqual;

function doTest(queue, expected) {
  const log = `for queue [${queue.join(", ")}]\n`;
  const actual = warnTheSheep(queue);
  strictEqual(actual, expected, log);
}

describe("Fixed tests", function () {
  it("Tests", function () {
    doTest(
      ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
      "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    );
    doTest(
      ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 5! You are about to be eaten by a wolf!"
    );
    doTest(
      ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    );
    doTest(
      ["sheep", "wolf", "sheep"],
      "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    );
    doTest(["wolf"], "Pls go away and stop eating my sheep");
    doTest(["sheep", "sheep", "wolf"], "Pls go away and stop eating my sheep");
  });
});