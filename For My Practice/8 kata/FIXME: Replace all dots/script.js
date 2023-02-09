// my solution
var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}



// other solutions

var replaceDots = function(str) {
  return str.replace(/\./g,'-');
}

//

const replaceDots = function (str) {
  return str.replaceAll(".", "-");
};


// test
const Test = require('@codewars/test-compat');

describe("Example Tests", function() {

  it("test dots", function(){
    Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
  });
  
});
