//My Solution
const main = (verb, noun) => verb + noun;
//correct answers
function main(verb, noun) {
  return verb + noun;
}
//
function main(verb, noun) {
  if (arguments.length > 1) return verb.trim() + " " + noun.trim();
}
//Sample Tests

describe("Tests", () => {
  it("test", () => {
    Test.expectNoError(main);
    Test.assertEquals(main("take ", "item"), "take item");
    Test.assertEquals(main("use ", "sword"), "use sword");
  });
});
