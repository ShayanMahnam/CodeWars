// my solution

function position(letter) {
  //Write your own Code!
  let position = letter.toLowerCase().charCodeAt(0) - 96;
  return `Position of alphabet: ${position}`;
}


// other solutions

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}

///

position = (l) => `Position of alphabet: ${l.charCodeAt() - 96}`;

///

function position(alphabet) {
  var letters = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var placed = letters.indexOf(alphabet);
  return "Position of alphabet:" + " " + placed;
}



// test
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(position("a"), "Position of alphabet: 1");
    Test.assertEquals(position("z"), "Position of alphabet: 26");
    Test.assertEquals(position("e"), "Position of alphabet: 5");
  });
});
