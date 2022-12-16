// my solution
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}



// other solutions

function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == "(" ? 1 : -1;
  }

  return indent == 0;
}

//

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}

//

function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

//

function validParentheses(v) {
  while (v.includes("()")) {
    v = v.replace("()", "");
  }
  return v.length === 0;
}



// test

const { assert } = require("chai");

describe("Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
});
