// my solution
function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)
  //   return list.map(x=> x['username'] === `${x.['firstName'].toLowerCase()}${x.['lastName'].toLowerCase()}${x.['age']}` )
  return list.map((v) => {
    return {
      ...v,
      username:
        v.firstName.toLowerCase() +
        v.lastName.slice(0, 1).toLowerCase() +
        (Date.prototype.getFullYear() - v.age).toString(),
    };
  });
}




// other solutions

function addUsername(list) {
  return list.map(function (x) {
    x.username =
      x.firstName.toLowerCase() +
      x.lastName[0].toLowerCase() +
      (new Date().getFullYear() - x.age);
    return x;
  });
}

//

function addUsername(list) {
  const currentYear = new Date().getFullYear();
  list.forEach(
    (dev) =>
      (dev.username =
        (dev.firstName + dev.lastName.charAt()).toLowerCase() +
        (currentYear - dev.age))
  );
  return list;
}



// test


// ======================================================

// Please run the full test suite to check your solution

// ======================================================


describe("Please run the test suite to check your solution", function(){
  it("does not test your function", function(){
    Test.assertEquals("not a test", "not a test", "This does not test you function");
  });
});