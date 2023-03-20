// my solution
function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return (
    a.map((el) => el * el).reduce((x, z) => x + z, 0) >
    b.map((el) => el ** 3).reduce((x, z) => x + z, 0)
  );
}



// other solutions

const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0); 

  //


function arrayMadness(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  );
}

//

function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, { length } = a; i < length; ++i) {
    sum1 += a[i] ** 2;
  }
  for (let i = 0, { length } = b; i < length; ++i) {
    sum2 += b[i] ** 3;
  }
  return sum1 > sum2;
}


// test
describe("arrayMadness", () => {
  it("should work for fixed tests", () => {
    Test.assertEquals(arrayMadness([4, 5, 6], [1, 2, 3]), true);
    Test.assertEquals(arrayMadness([5, 6, 7], [4, 5, 6]), false);
    Test.assertEquals(arrayMadness([4, 5, 6], [3, 4, 5]), false);
    Test.assertEquals(arrayMadness([3, 4, 5], [2, 3, 4]), false);
    Test.assertEquals(arrayMadness([2, 3, 4], [1, 2, 3]), false);
    Test.assertEquals(arrayMadness([1, 2, 3], [0, 1, 2]), true);
    Test.assertEquals(arrayMadness([5, 3, 2, 4, 1], [15]), false);
    Test.assertEquals(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
    Test.assertEquals(
      arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]),
      false
    );
    Test.assertEquals(
      arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]),
      true
    );
    Test.assertEquals(
      arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]),
      false
    );
  });
});
  