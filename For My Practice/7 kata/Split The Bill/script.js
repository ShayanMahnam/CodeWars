// my solution
function splitTheBill(x) {
  //code away...
  let average =
    Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
  let arr = Object.keys(x);
  let arr2 = Object.values(x).map((a) => a - average);
  return Object.assign(
    ...arr.map((n, i) => ({ [n]: parseFloat(arr2[i].toFixed(2)) }))
  );
}



// other solutions
function splitTheBill(x) {
  var average = 0;
  var count = 0;

  for (item in x) {
    average += x[item];
    count++;
  }
  average = average / count;

  for (item in x) {
    x[item] = Math.round((x[item] - average) * 100) / 100;
  }

  return x;
}

//

const splitTheBill = (x) => {
  let vals = Object.values(x),
    avg = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce(
    (y, v) => ((y[v] = +(x[v] - avg).toFixed(2)), y),
    {}
  );
};




// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(splitTheBill({ A: 20, B: 15, C: 10 }), {
      A: 5,
      B: 0,
      C: -5,
    });
    Test.assertSimilar(splitTheBill({ A: 40, B: 25, X: 10 }), {
      A: 15,
      B: 0,
      X: -15,
    });
  });
});
