// my solution

const fizzBuzz = (n) => {
  // feel free to change this into a function :)
  return n % 5 === 0 && n % 3 === 0
    ? "FizzBuzz"
    : n % 3 === 0
    ? "Fizz"
    : n % 5 === 0
    ? "Buzz"
    : n;
};


// other solutions

const fizzBuzz1 = (n) => {
  return (
    (n % 15 === 0 && "FizzBuzz") ||
    (n % 3 === 0 && "Fizz") ||
    (n % 5 == 0 && "Buzz") ||
    n
  );
};

//

const fizzBuzz2 = n => n%15 ? n%5 ? n%3 ? n : "Fizz" : "Buzz" : "FizzBuzz" ;

//



// test

// these tests do not test for if 'if' is used - take that in mind
describe("Fizz buzz without ifs", () => {
  Test.assertEquals(fizzBuzz(1), 1);
  Test.assertEquals(fizzBuzz(3), "Fizz");
  Test.assertEquals(fizzBuzz(6), "Fizz");
  Test.assertEquals(fizzBuzz(7), 7);
  Test.assertEquals(fizzBuzz(10), "Buzz");
  Test.assertEquals(fizzBuzz(30), "FizzBuzz");
});