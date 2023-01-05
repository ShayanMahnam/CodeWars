// my solution

function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(
    (v) => v.firstName.split``.reduce((a, b) => a + b.charCodeAt(), 0) % 2 !== 0
  );
}


// other solutions

function findOddNames(list) {
  return list.filter((d) => {
    return (
      d.firstName.split("").reduce((r, e) => r + e.charCodeAt(0), 0) % 2 !== 0
    );
  });
}

//

var findOddNames = (list) =>
  list.filter(
    (d) =>
      d.firstName
        .split("")
        .map((c) => c.charCodeAt(0))
        .reduce((a, b) => a + b, 0) %
        2 !==
      0
  );

  //

  const findOddNames = (list) =>
    list.filter(
      (val) =>
        [...val.firstName].reduce((pre, val) => pre + val.charCodeAt(), 0) % 2
    );



// test

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Aba",
        lastName: "N.",
        country: "Ghana",
        continent: "Africa",
        age: 21,
        language: "Python",
      },
      {
        firstName: "Abb",
        lastName: "O.",
        country: "Israel",
        continent: "Asia",
        age: 39,
        language: "Java",
      },
    ];

    var answer1 = [
      {
        firstName: "Abb",
        lastName: "O.",
        country: "Israel",
        continent: "Asia",
        age: 39,
        language: "Java",
      },
    ];

    Test.assertDeepEquals(findOddNames(list1), answer1);

    var list2 = [
      {
        firstName: "Aba",
        lastName: "N.",
        country: "Ghana",
        continent: "Africa",
        age: 21,
        language: "Python",
      },
    ];

    var answer2 = [];

    Test.assertDeepEquals(findOddNames(list2), answer2);
  });
});
