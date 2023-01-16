// my solution


function add(n) {
  return function (x) {
    return n + x;
  };
}

// other solutions

var add = (a) => (n) => n + a;

//

add = (n) => (m) => n + m;

// test
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(add(1)(3), 4, "add one to three equals four");
  });
});
