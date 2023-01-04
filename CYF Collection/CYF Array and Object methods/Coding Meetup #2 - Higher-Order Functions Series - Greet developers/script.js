// my solution

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  list.map(
    (x) =>
      (x[
        "greeting"
      ] = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
  );
  return list;
}


// other solutions

function greetDevelopers(list) {
  list.forEach(function (developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });

  return list;
}

//

const greetDevelopers = (list) =>
  list.map((dev) => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));

  //

  function greetDevelopers(list) {
    // thank you for checking out my kata :)
    return list.map(function (a) {
      a.greeting =
        "Hi " +
        a.firstName +
        ", what do you like the most about " +
        a.language +
        "?";
      return a;
    });
  }



// test

const { assert } = require("chai");

describe("Sample Tests", () => {
  it("test", () => {
    const list1 = [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
      },
    ];

    const answer = [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
        greeting: "Hi Sofia, what do you like the most about Java?",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
        greeting: "Hi Lukas, what do you like the most about Python?",
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
        greeting: "Hi Madison, what do you like the most about Ruby?",
      },
    ];

    assert.deepEqual(greetDevelopers(list1), answer);
  });
});