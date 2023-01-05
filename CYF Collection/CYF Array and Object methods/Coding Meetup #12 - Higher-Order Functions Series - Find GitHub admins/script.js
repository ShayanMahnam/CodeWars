// my solution
function findAdmin(list, lang) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter((x) => x.language === lang && x.githubAdmin === "yes");
}



// other solutions
const findAdmin = (list, lang) => {
  return list.filter(
    ({ language, githubAdmin }) => githubAdmin == "yes" && language == lang
  );
};




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 49,
        language: "Ruby",
        githubAdmin: "no",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript",
        githubAdmin: "no",
      },
    ];

    var answer1 = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes",
      },
    ];

    Test.assertDeepEquals(findAdmin(list1, "JavaScript"), answer1);
    Test.assertDeepEquals(findAdmin(list1, "Ruby"), []);
    Test.assertDeepEquals(findAdmin(list1, "Python"), []);
  });
});
