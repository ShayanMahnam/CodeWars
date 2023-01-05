// my solution
function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  let findAge = [];
  for (let i = 0; i < list.length; i++) {
    findAge.push(list[i].age);
  }
  let sum = findAge.reduce((prev, cur) => prev + cur) / findAge.length;
  return Math.round(sum);
}



// other solutions
function getAverageAge(list) {
  return Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);
}

//

function getAverageAge(list) {
  let count = 0;
  let sum = 0;

  for (let dev of list) {
    count++;
    sum += dev.age;
  }

  return Math.round(sum / count);
}

//

const getAverageAge = ($) =>
  Math.round($.reduce((a, b) => a + b.age, 0) / $.length);

//

function getAverageAge(list) {
  var total_years = 0;

  for (i = 0; i < list.length; i++) {
    total_years += list[i].age;
  }

  return Math.round(total_years / list.length);
}





// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Maria",
        lastName: "Y.",
        country: "Cyprus",
        continent: "Europe",
        age: 30,
        language: "Java",
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 70,
        language: "Python",
      },
    ];

    Test.assertEquals(getAverageAge(list1), 50);

    var list2 = [
      {
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 20,
        language: "Ruby",
      },
      {
        firstName: "Andrei",
        lastName: "E.",
        country: "Romania",
        continent: "Europe",
        age: 21,
        language: "C",
      },
    ];

    Test.assertEquals(getAverageAge(list2), 21);
  });
});
