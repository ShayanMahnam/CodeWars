// my solution

function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  const arr = list.map((v) => v.language);
  const obj = {};
  arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  const count = Object.values(obj).sort((a, b) => b - a);
  const max = count.splice(0, 1);
  return count.every((v) => v * 2 >= max);
}


// other solutions

function isLanguageDiverse(list) {
  var counts = {},
    min = Number.MAX_VALUE,
    max = 0;

  for (var dev of list) counts[dev.language] = (counts[dev.language] || 0) + 1;

  for (var lang in counts) {
    min = Math.min(counts[lang], min);
    max = Math.max(counts[lang], max);
  }

  return max <= 2 * min;
}

//

function isLanguageDiverse(list) {
  list = list.map((dev) => dev.language);
  const num = [...new Set(list)].map(
    (el) => list.filter((e) => e === el).length
  );
  return Math.max(...num) / Math.min(...num) <= 2;
}

//

const isLanguageDiverse = (list) => {
  list = [
    list.filter((a) => a.language === "Python").length,
    list.filter((a) => a.language === "Ruby").length,
    list.filter((a) => a.language === "JavaScript").length,
  ];
  return Math.max.apply(null, list) / Math.min.apply(null, list) <= 2;
};



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
        language: "Python",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "Ruby",
      },
      {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 43,
        language: "Ruby",
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 95,
        language: "JavaScript",
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 18,
        language: "JavaScript",
      },
      {
        firstName: "Joao",
        lastName: "D.",
        country: "Portugal",
        continent: "Europe",
        age: 25,
        language: "JavaScript",
      },
    ];

    var list2 = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "Python",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "Ruby",
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 95,
        language: "JavaScript",
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 18,
        language: "JavaScript",
      },
      {
        firstName: "Joao",
        lastName: "D.",
        country: "Portugal",
        continent: "Europe",
        age: 25,
        language: "JavaScript",
      },
    ];

    var list3 = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "Python",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "Ruby",
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 18,
        language: "JavaScript",
      },
      {
        firstName: "Joao",
        lastName: "D.",
        country: "Portugal",
        continent: "Europe",
        age: 25,
        language: "JavaScript",
      },
    ];

    var list4 = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "Python",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "Ruby",
      },
      {
        firstName: "Joao",
        lastName: "D.",
        country: "Portugal",
        continent: "Europe",
        age: 25,
        language: "JavaScript",
      },
    ];

    Test.assertEquals(isLanguageDiverse(list1), false);

    Test.assertEquals(isLanguageDiverse(list2), false);

    Test.assertEquals(isLanguageDiverse(list3), true);

    Test.assertEquals(isLanguageDiverse(list4), true);
  });
});
