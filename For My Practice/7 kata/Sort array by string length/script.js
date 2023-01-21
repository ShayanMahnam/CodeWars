// my solution

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b)=> a.length - b.length)
};


// other solutions

function compareNumeric(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}

function sortByLength (array) {
	let arrayL = array.map((value) => {
		return value.length;
	})
	arrayL = arrayL.sort(compareNumeric);
	let resArr = arrayL.map((value) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === value) {
				return array[i];
			}
		}
	})
	return resArr;
};



// test

const Test = require("@codewars/test-compat");

describe("Example tests", function () {
  it("Test 1", function () {
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]), [
      "I",
      "To",
      "Beg",
      "Life",
    ]);
  });
  it("Test 2", function () {
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]), [
      "",
      "Pizza",
      "Brains",
      "Moderately",
    ]);
  });
  it("Test 3", function () {
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]), [
      "Short",
      "Longer",
      "Longest",
    ]);
  });
});