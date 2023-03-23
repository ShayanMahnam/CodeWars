// my solution
function solve(a){
  let even = a.filter(number => !isNaN(number) && number % 2 === 0)
  let odd = a.filter(number =>!isNaN(number) && number % 2 !== 0)
  return even.length - odd.length
};



// other solutions

function solve(a) {
  return a.reduce(
    (x, y) => (Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x),
    0
  );
} 

//

function solve(a){
  var count=0;
  for (var i=0; i<a.length; ++i)
    if (typeof a[i]=='number')
    {
      if (a[i]%2==0) count++;
      else count--;
    }
  return count;
};

//

let solve = (a) =>
  a.filter((n) => n % 2 === 0).length -
  a.filter((n) => Math.abs(n % 2) === 1).length;





// test
describe("Basic tests", function () {
  Test.assertEquals(solve([0, 1, 2, 3]), 0);
  Test.assertEquals(solve([0, 1, 2, 3, "a", "b"]), 0);
  Test.assertEquals(
    solve([0, 15, "z", 16, "m", 13, 14, "c", 9, 10, 13, "u", 4, 3]),
    0
  );
  Test.assertEquals(solve([13, 6, 8, 15, 4, 8, 13]), 1);
  Test.assertEquals(solve([1, "a", 17, 8, "e", 3, "i", 12, 1]), -2);
  Test.assertEquals(
    solve([
      5,
      15,
      16,
      10,
      6,
      4,
      16,
      "t",
      13,
      "n",
      14,
      "k",
      "n",
      0,
      "q",
      "d",
      7,
      9,
    ]),
    2
  );
});