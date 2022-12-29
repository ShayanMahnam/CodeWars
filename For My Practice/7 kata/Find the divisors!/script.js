// my solution

function divisors(integer) {
  let arr =[]
  for (let i = 2; i < integer; i++){
    if(integer % i === 0){
    arr.push(i)
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr
};


// other solutions

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

//

function divisors( int ) {
  const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
  return arr.length ? arr : `${int} is prime`;
};

//

function divisors(x) {
  var result = [];
  for (var a = 2; a*a <= x; ++a) {
    if (x%a == 0) {
      var b = x/a;
      result.push(a);
      if (b != a) {
        result.push(b);
      }
    }
  }
  if (result.length == 0) {
    return x+' is prime';
  }
  result.sort(function (a, b) {
    return a - b;
  });
  return result;
};



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(divisors(15), [3, 5]);
    Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
    Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});
