// my solution

function happyCoding(nickname) {
  //Happy Coding ^_^
  nickname = nickname.toLowerCase().split(" ");
  let happyIndex = nickname.indexOf("happy");
  let codingIndex = nickname.indexOf("coding");

  if (codingIndex !== -1 && happyIndex !== -1 && codingIndex < happyIndex) {
    return 2;
  } else if (
    happyIndex !== -1 &&
    codingIndex !== -1 &&
    codingIndex > happyIndex
  ) {
    return 1;
  } else if (codingIndex !== -1 && happyIndex === -1) {
    return 3;
  } else if (happyIndex !== -1 && codingIndex === -1) {
    return 4;
  } else {
    return 5;
  }
}

//

function happyCoding(nickname) {
  let codingMood = nickname
    .split(" ")
    .filter((a) => a.match(/happy/i) || a.match(/coding/i))
    .join("");
  if (codingMood.toLowerCase() === "happycoding") return 1;
  if (codingMood.toLowerCase() === "codinghappy") return 2;
  if (codingMood.toLowerCase() === "coding") return 3;
  if (codingMood.toLowerCase() === "happy") return 4;

  return 5;
}

//

function happyCoding(nickname) {
  var all = nickname.toLowerCase().split` `,
    happy = all.indexOf("happy"),
    coding = all.indexOf("coding");
  return happy == -1 && coding == -1
    ? 5
    : coding == -1
    ? 4
    : happy == -1
    ? 3
    : happy > coding
    ? 2
    : 1;
}

// other solutions
function happyCoding(nickname) {
  return [
    /[^\s\S]/,
    /\bhappy\b.*\bcoding\b/i,
    /\bcoding\b.*\bhappy\b/i,
    /\bcoding\b/i,
    /\bhappy\b/i,
    /./,
  ].findIndex((re) => re.test(nickname));
}

//

function happyCoding(nickname) {
  var s = nickname.toLowerCase().split` `,
    happy = s.indexOf("happy") + 1,
    coding = s.indexOf("coding") + 1;
  return happy ? (coding ? (happy < coding ? 1 : 2) : 4) : coding ? 3 : 5;
}



// test

const Test = require("@codewars/test-compat");

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(happyCoding("Happy coding"), 1);

    Test.assertEquals(happyCoding("happy Coding"), 1);

    Test.assertEquals(happyCoding("coding happy"), 2);

    Test.assertEquals(happyCoding("coding everyday"), 3);

    Test.assertEquals(happyCoding("happy programmer"), 4);

    Test.assertEquals(happyCoding("unhappy codewarrior"), 5);

    Test.assertEquals(happyCoding("happyyyyy codinggggg"), 5);
  });
});