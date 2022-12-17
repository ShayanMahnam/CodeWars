// my solution

function generateHashtag(str) {
  if (str.trim() === "") return false;

  const stringWithCamelCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}


// other solutions

function generateHashtag(str) {
  if (!str || str.length < 1) return false;

  var r =
    "#" +
    str
      .split(" ")
      .map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join("");
  return r.length > 140 ? false : r;
}

//

function generateHashtag(str = "") {
  var hashtag = `#${str
    .trim()
    .replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`;
  return !!str && hashtag.length <= 140 && hashtag;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      generateHashtag(""),
      false,
      "Expected an empty string to return false"
    );
    Test.assertEquals(
      generateHashtag(" ".repeat(200)),
      false,
      "Still an empty string"
    );
    Test.assertEquals(
      generateHashtag("Do We have A Hashtag"),
      "#DoWeHaveAHashtag",
      "Expected a Hashtag (#) at the beginning."
    );
    Test.assertEquals(
      generateHashtag("Codewars"),
      "#Codewars",
      "Should handle a single word."
    );
    Test.assertEquals(
      generateHashtag("Codewars Is Nice"),
      "#CodewarsIsNice",
      "Should remove spaces."
    );
    Test.assertEquals(
      generateHashtag("Codewars is nice"),
      "#CodewarsIsNice",
      "Should capitalize first letters of words."
    );
    Test.assertEquals(
      generateHashtag("code" + " ".repeat(140) + "wars"),
      "#CodeWars"
    );
    Test.assertEquals(
      generateHashtag(
        "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
      ),
      false,
      "Should return false if the final word is longer than 140 chars."
    );
    Test.assertEquals(
      generateHashtag("a".repeat(139)),
      "#A" + "a".repeat(138),
      "Should work"
    );
    Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long");
  });
});
