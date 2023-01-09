// my solution

function score(dice) {
  let total = 0;
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;

  dice.forEach(function (roll) {
    if (roll === 1) {
      ones++;
      if (ones === 3) {
        total += 1000;
        ones = 0;
      }
    }
    if (roll === 5) {
      fives++;
      if (fives === 3) {
        total += 500;
        fives = 0;
      }
    }
    if (roll === 2) twos++;
    if (roll === 3) threes++;
    if (roll === 4) fours++;
    if (roll === 6) sixes++;
  });

  total += ones * 100;
  total += fives * 50;
  if (sixes >= 3) total += 600;
  if (fours >= 3) total += 400;
  if (threes >= 3) total += 300;
  if (twos >= 3) total += 200;

  return total;
}


// other solutions
function score(dice) {
  var dc = [0, 0, 0, 0, 0, 0];
  var tdr = [1000, 200, 300, 400, 500, 600];
  var sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach(function (x) {
    dc[x - 1]++;
  });
  return dc.reduce(function (s, x, i) {
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
}

//

function score(dice) {
  var six = 0,
    five = 0,
    four = 0,
    three = 0,
    too = 0,
    one = 0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) {
      six++;
    }
    if (dice[i] == 5) {
      five++;
    }
    if (dice[i] == 4) {
      four++;
    }
    if (dice[i] == 3) {
      three++;
    }
    if (dice[i] == 2) {
      too++;
    }
    if (dice[i] == 1) {
      one++;
    }
    i++;
  }
  var r = 0;
  if (one > 2) {
    r += 1000;
    one -= 3;
  }
  if (six > 2) {
    r += 600;
  }
  if (five > 2) {
    r += 500;
    five -= 3;
  }
  if (four > 2) {
    r += 400;
  }
  if (three > 2) {
    r += 300;
  }
  if (too > 2) {
    r += 200;
  }
  r += one * 100;
  r += five * 50;
  return r;
}

//

function score(dice) {
  var v = {
    111: 1000,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    1: 100,
    5: 50,
  };

  var s =
    dice
      .sort()
      .join("")
      .match(/(([1-6])\2\2)|(1|5)/g) || [];
  return s.reduce(function (a, e) {
    return a + v[e];
  }, 0);
}

// gpt answer

function score(dice) {
  const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (const die of dice) {
    counts[die]++;
  }

  let score = 0;
  for (const [number, count] of Object.entries(counts)) {
    if (count >= 3) {
      score += number * 100;
      count -= 3;
    }
    if (number === 1) {
      score += count * 100;
    } else if (number === 5) {
      score += count * 50;
    }
  }

  return score;
}







// test
const Test = require("@codewars/test-compat");

describe("Scorer Function", function () {
  it("should value this as worthless", function () {
    Test.expect(score([2, 3, 4, 6, 2]) == 0, "Should be 0 :-(");
  });

  it("should value this triplet correctly", function () {
    Test.expect(score([4, 4, 4, 3, 3]) == 400, "Should be 400");
  });

  it("should value this mixed set correctly", function () {
    Test.expect(score([2, 4, 4, 5, 4]) == 450, "Should be 450");
  });
});