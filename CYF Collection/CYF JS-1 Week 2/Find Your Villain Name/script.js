//My Solution
function getVillainName(birthday) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`;
}
//Other answers
function getVillainName(birthday) {
  firstNames = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward",
  ];
  lastNames = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  return (
    firstNames[birthday.getMonth()] + " " + lastNames[birthday.getDate() % 10]
  );
}
//
function getFirstName(month) {
  var firstNames = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward",
  ];

  return firstNames[month];
}

function getSecondName(day) {
  var secondNames = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  day = day % 10;
  return secondNames[day];
}

function getVillainName(birthday) {
  return (
    getFirstName(birthday.getMonth()) + " " + getSecondName(birthday.getDate())
  );
}
//
function getVillainName(birthday) {
  return getFirstName(birthday) + " " + getLastName(birthday);
}

function getFirstName(birthday) {
  var firstNames = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward",
  ];

  return firstNames[birthday.getMonth()];
}

function getLastName(birthday) {
  var lastNames = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];

  var digit = birthday.getDate() % 10;

  return lastNames[digit];
}
//Sample Tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    //may 3
    Test.assertEquals(
      getVillainName(new Date("May 3")),
      "The Despicable Raisin",
      "Expected result: The Despicable Raisin; Your result: " +
        getVillainName(new Date("May 13"))
    );

    //apr 1
    Test.assertEquals(
      getVillainName(new Date("April 21")),
      "The Trashy Pickle",
      "Expected result: The Trashy Pickle; Your result: " +
        getVillainName(new Date("April 21"))
    );

    //dec 7
    Test.assertEquals(
      getVillainName(new Date("December 17")),
      "The Awkward House Cat",
      "Expected result: The Awkward House Cat; Your result: " +
        getVillainName(new Date("December 17"))
    );
  });
});