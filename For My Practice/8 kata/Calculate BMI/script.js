// my solution

function bmi(weight, height) {
  let bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}


// other solutions
function bmi(weight, height) {
  var result = weight / Math.pow(height, 2);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//

const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";

    //

    function bmi(weight, height) {
      var bmi = weight / (height * height);

      return bmi < 18.5
        ? "Underweight"
        : bmi <= 25
        ? "Normal"
        : bmi <= 30
        ? "Overweight"
        : "Obese";
    }




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(bmi(80, 1.8), "Normal");
  });
});
