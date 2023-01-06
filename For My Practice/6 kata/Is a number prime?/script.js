// my solution


function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}


// other solutions

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3 || n == 5 || n == 7 || n == 11) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
    if (n % i === 0 || n % (i + 2) === 0) return false;
  return true;
}

//

const isPrime = (num) => {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
};

//
const isPrime = (a, b = 2) => {
  while (b * b <= a) {
    if (a % b) ++b;
    else return !1;
  }
  return a > 1;
};

//


function isPrime(num) {
  if (num < 2) return false;
  else if (num <= 3) return true;
  else if (num % 2 == 0 || num % 3 == 0) return false;
  for (var i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }
  return true;
}



// test

const Test = require("@codewars/test-compat");

describe("Basic", () => {
  it("Basic tests", () => {
    Test.assertEquals(isPrime(0), false, "0 is not prime");
    Test.assertEquals(isPrime(1), false, "1 is not prime");
    Test.assertEquals(isPrime(2), true, "2 is prime");
    Test.assertEquals(isPrime(73), true, "73 is prime");
    Test.assertEquals(isPrime(75), false, "75 is not prime");
    Test.assertEquals(isPrime(-1), false, "-1 is not prime");
  });

  it("Test prime", () => {
    Test.assertEquals(isPrime(3), true, "3 is prime");
    Test.assertEquals(isPrime(5), true, "5 is prime");
    Test.assertEquals(isPrime(7), true, "7 is prime");
    Test.assertEquals(isPrime(41), true, "41 is prime");
    Test.assertEquals(isPrime(5099), true, "5099 is prime");
  });

  it("Test not prime", () => {
    Test.assertEquals(isPrime(4), false, "4 is not prime");
    Test.assertEquals(isPrime(6), false, "6 is not prime");
    Test.assertEquals(isPrime(8), false, "8 is not prime");
    Test.assertEquals(isPrime(9), false, "9 is not prime");
    Test.assertEquals(isPrime(45), false, "45 is not prime");
    Test.assertEquals(isPrime(-5), false, "-5 is not prime");
    Test.assertEquals(isPrime(-8), false, "-8 is not prime");
    Test.assertEquals(isPrime(-41), false, "-41 is not prime");
  });
});