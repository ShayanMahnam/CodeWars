// my solution


function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
}

yourFutureCareer();

// other solutions

const yourFutureCareer = () => {
  let career = Math.random();
  return `${
    career <= 0.32 ? "FrontEnd" : career <= 0.65 ? "BackEnd" : "Full-Stack"
  } Developer`;
};



// test
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 