// my solution

function replace(s){
  //coding and coding....
  return s.replace(/[aeiouAEIOU]/g, '!')
  
}


// other solutions
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

//

const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

//

function replace(s){
  var newS = ''
  var vowels = "aAeEiIoOuU"
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i]
    }  else {
      newS += '!'
    }
  }
  return newS
}


// test

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})