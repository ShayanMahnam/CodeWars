// my solution

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  let checkLang = list.find((x) => x.language === "Python");
  return checkLang
    ? `${checkLang.firstName}, ${checkLang.country}`
    : "There will be no Python developers";
}


// other solutions

function getFirstPython(list) {
  for (var i = 0; i < list.length; ++i)
    if (list[i].language == "Python")
      return list[i].firstName + ", " + list[i].country;
  return "There will be no Python developers";
}

//





// test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 30,
        language: "Python",
      },
      {
        firstName: "Emma",
        lastName: "B.",
        country: "Norway",
        continent: "Europe",
        age: 19,
        language: "Clojure",
      },
    ];

    var list2 = [
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 29,
        language: "JavaScript",
      },
      {
        firstName: "Amar",
        lastName: "V.",
        country: "Bosnia and Herzegovina",
        continent: "Europe",
        age: 32,
        language: "Ruby",
      },
    ];

    Test.assertSimilar(getFirstPython(list1), "Victoria, Puerto Rico");
    Test.assertSimilar(
      getFirstPython(list2),
      "There will be no Python developers"
    );
  });
});
