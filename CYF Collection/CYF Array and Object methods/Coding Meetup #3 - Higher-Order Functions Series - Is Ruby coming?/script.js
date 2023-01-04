// my solution
function isRubyComing(list) {
  // thank you for checking out my kata :)
  return list.filter((x) => x.language === "Ruby").length ? true : false;
}



// other solutions
function isRubyComing(list) {
  return list.some((e) => e.language === "Ruby");
}

//
function isRubyComing(list) {
  return list.some((developer) => developer.language === "Ruby");
}

///

function isRubyComing(list) {
  var arr = [];
  for(var i = 0; i < list.length; i++) {
    if(list[i].hasOwnProperty('language')) {
      if(list[i].language === 'Ruby') {
        arr.push(true)
      } else {
        arr.push(false);
      }
    }
  }
  arr = arr.filter(function(x) {
    return x === true;
  });
  return arr[0] || false;
};

//

function isRubyComing(list) {
  return list.find((x) => x.language == "Ruby") ? true : false;
}

//

function isRubyComing(list) {
  return list.filter((el) => el.language == "Ruby").length != 0;
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
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

    var list2 = [
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
    ];

    Test.assertEquals(isRubyComing(list1), true);
    Test.assertEquals(isRubyComing(list2), false);
  });
});
