// my solution

function isSameLanguage(list) {
  for (var i = 1; i < list.length; i++) {
    if (list[i].language !== list[0].language) {
      return false;
    }
  }
  return true;
}


// other solutions
function isSameLanguage(list) {
  return list.every((e) => e.language === list[0].language);
}

//
const isSameLanguage = (list) => {
  return [...new Set(list.map((el) => el["language"]))].length === 1;
};

//






// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "JavaScript",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 65,
        language: "JavaScript",
      },
    ];

    var list2 = [
      {
        firstName: "Mariami",
        lastName: "G.",
        country: "Georgia",
        continent: "Europe",
        age: 29,
        language: "Python",
      },
      {
        firstName: "Mia",
        lastName: "H.",
        country: "Germany",
        continent: "Europe",
        age: 39,
        language: "Ruby",
      },
      {
        firstName: "Maria",
        lastName: "I.",
        country: "Greece",
        continent: "Europe",
        age: 32,
        language: "C",
      },
    ];

    Test.assertEquals(isSameLanguage(list1), true);
    Test.assertEquals(isSameLanguage(list2), false);
  });
});
