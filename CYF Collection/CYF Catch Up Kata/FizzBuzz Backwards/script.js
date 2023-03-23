// my solution
function reverseFizzBuzz(sequence) {
  let indexOfFizz = sequence.indexOf("Fizz");
  let indexOfBuzz = sequence.indexOf("Buzz");
  let indexOfFizzBuzz = sequence.indexOf("FizzBuzz");

  if (
    indexOfFizz !== -1 &&
    indexOfBuzz !== -1 &&
    indexOfFizzBuzz !== -1 &&
    (indexOfFizzBuzz + (1 % indexOfBuzz) + 1 === 0 ||
      indexOfFizzBuzz + (1 % indexOfFizz) + 1 === 0)
  ) {
    return [indexOfFizz + 1, indexOfBuzz + 1];
  }
  if (indexOfFizz !== -1 && indexOfBuzz !== -1 && indexOfFizzBuzz === -1) {
    return [indexOfFizz + 1, indexOfBuzz + 1];
  }
  if (indexOfFizz !== -1 && indexOfBuzz === -1 && indexOfFizzBuzz !== -1) {
    return [indexOfFizz + 1, indexOfFizzBuzz + 1];
  }
  if (indexOfFizz === -1 && indexOfBuzz === -1 && indexOfFizzBuzz !== -1) {
    return [indexOfFizzBuzz + 1, indexOfFizzBuzz + 1];
  }
  return [indexOfFizz + 1, indexOfBuzz + 1];
}



// other solutions

function reverseFizzBuzz(array) {
  var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz")+1;
  var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz")+1;

return [fizz,buzz];

};

//

function reverseFizzBuzz(array) {
  return [array.findIndex(e=>/Fizz/.test(e))+1, array.findIndex(e=>/Buzz/.test(e))+1]
};

//

function reverseFizzBuzz(array) {
  return [array.valueOf("Fizz"), array.valueOf("Buzz")];
}

Array.prototype.valueOf = function (string) {
  return (
    1 +
    this.findIndex(function (val) {
      return typeof val === "string" && val.includes(string);
    })
  );
};


// test
describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(reverseFizzBuzz([1, 2, "Fizz", 4, "Buzz"]), [3, 5]);
    Test.assertDeepEquals(
      reverseFizzBuzz([1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]),
      [2, 3]
    );
    Test.assertDeepEquals(
      reverseFizzBuzz([1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]),
      [2, 2]
    );
    Test.assertDeepEquals(
      reverseFizzBuzz(["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]),
      [1, 6]
    );
  });
});
