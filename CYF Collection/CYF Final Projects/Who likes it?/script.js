// my solution

function likes(names) {
  // TODO
  let lengthOfNames = names.length;
  if (lengthOfNames === 0) {
    return `no one likes this`;
  } else if (lengthOfNames === 1) {
    return `${names[0]} likes this`;
  } else if (lengthOfNames === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (lengthOfNames === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${lengthOfNames - 2} others like this`;
  }
}


// other solutions
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
//

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

//

function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}

//

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length === 2) return names[0] + " and " + names[1] + " like this";
  if (names.length === 3)
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return (
    names[0] +
    ", " +
    names[1] +
    " and " +
    (names.length - 2) +
    " others like this"
  );
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("example tests", function () {
  it("should return correct text", function () {
    assert.strictEqual(likes([]), "no one likes this");
    assert.strictEqual(likes(["Peter"]), "Peter likes this");
    assert.strictEqual(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    assert.strictEqual(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    assert.strictEqual(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });
});