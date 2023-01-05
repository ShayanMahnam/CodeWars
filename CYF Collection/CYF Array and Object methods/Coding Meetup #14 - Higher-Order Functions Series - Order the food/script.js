// my solution

function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  const key = "meal";
  return list
    .map((object) => object[key])
    .reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
}


// other solutions
function orderFood(list) {
  var orders = {};
  list.forEach((d) => {
    if (orders[d.meal]) orders[d.meal]++;
    else orders[d.meal] = 1;
  });
  return orders;
}

///

const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;


///

function orderFood(list) {
  return list.reduce((acc, x) => {
    acc[x.meal] = (acc[x.meal] || 0) + 1;
    return acc;
  }, {});
}

// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C",
        meal: "vegetarian",
      },
      {
        firstName: "Anna",
        lastName: "R.",
        country: "Liechtenstein",
        continent: "Europe",
        age: 52,
        language: "JavaScript",
        meal: "standard",
      },
      {
        firstName: "Ramona",
        lastName: "R.",
        country: "Paraguay",
        continent: "Americas",
        age: 29,
        language: "Ruby",
        meal: "vegan",
      },
      {
        firstName: "George",
        lastName: "B.",
        country: "England",
        continent: "Europe",
        age: 81,
        language: "C",
        meal: "vegetarian",
      },
    ];

    var answer = { vegetarian: 2, standard: 1, vegan: 1 };

    Test.assertDeepEquals(orderFood(list1), answer);
  });
});
