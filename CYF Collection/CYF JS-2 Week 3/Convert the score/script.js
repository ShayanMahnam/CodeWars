// my solution
function scoreboard(string) {
  // code here!
  const scores = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    nil: 0,
  };
  var result = [];
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    for (var key in scores) {
      if (words[i].includes(key)) result.push(scores[key]);
    }
  }
  return result;
}



// other solutions

function scoreboard(string) {
  var arr = string.split(" ");
  var a = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return [a.indexOf(arr[arr.length - 2]), a.indexOf(arr[arr.length - 1])];
}

//

const scoreboard = (string) => {
  const dictionary = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const scoreOne = string.split(" ").reverse()[1];
  const scoreTwo = string.split(" ").reverse()[0];
  return [dictionary[scoreOne], dictionary[scoreTwo]];
};



// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(
      scoreboard("The score is four nil"),
      [4, 0],
      "Should return: [4,0]"
    );
    Test.assertSimilar(
      scoreboard("new score: two three"),
      [2, 3],
      "Should return: [2,3]"
    );
    Test.assertSimilar(scoreboard("two two"), [2, 2], "Should return: [2,2]");
    Test.assertSimilar(
      scoreboard("Arsenal just conceded another goal, two nil"),
      [2, 0],
      "Should return: [2,0]"
    );
  });
});
