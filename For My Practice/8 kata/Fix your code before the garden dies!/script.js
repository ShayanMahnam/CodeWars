// my solution

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}


// other solutions

function rainAmount(mm) {
  return mm < 40
    ? `You need to give your plant ${40 - mm}mm of water`
    : "Your plant has had more than enough water for today!";
}



// test
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      rainAmount(100),
      "Your plant has had more than enough water for today!"
    );
    Test.assertEquals(
      rainAmount(39),
      "You need to give your plant 1mm of water"
    );
  });
});
