// my solution
function addLength(str) {
//start-here
  return str.split(" ").map(element => `${element} ${element.length}`)
}



// other solutions

function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}

//

function addLength(str) {
  var split = str.split(" ");
  var result = [];
   
  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  } 
  return result;  
}



// test

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
  });
});
