// my solution


decodeMorse = function (morseCode) {
  // Your code here
  // You can use MORSE_CODE[morse]
  const words = morseCode.trim().split("   ");
  return words
    .map((word) =>
      word
        .split(" ")
        .map((code) => MORSE_CODE[code])
        .join("")
    )
    .join(" ");
};

// other solutions

decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(" ").map(decodeMorseLetter).join("");
  }
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};

//

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};

//





// test

const { assert } = require('chai');

describe("Sample tests", function(){
  
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });
  
});


// describe("Your own tests", function(){
//   it("Your test case", () => {  
//     assert.strictEqual(decodeMorse(???), ???);
//   });
// });