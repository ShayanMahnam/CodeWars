// my solution

function friend(friends) {
  //your code here
  return friends.filter((x) => x.length === 4);
}


// other solutions

const friend = (friends) => friends.filter((friend) => friend.length == 4);

//

function friend(friends) {
  //Create new array called "myFriends" for add your friends
  var i,
    len = friends.length,
    myFriends = [];

  for (i = 0; i < len; i++) {
    //Check for names with length equal to four and it is not a number
    if (friends[i].length == 4 && isNaN(friends[i])) {
      myFriends.push(friends[i]);
    }
  }

  return myFriends;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), [
      "Ryan",
    ]);
    assert.deepEqual(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
      ["Jimm", "Cari", "aret"]
    );
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), [
      "Love",
      "Your",
      "Face",
    ]);
  });
});
