// my solution
function capitalize(s){
  let even = s.split('').map((x,i)=> i % 2 === 0 ? x.toUpperCase() : x ).join('')
  let odd = s.split('').map((x,i)=> i % 2 !== 0 ? x.toUpperCase() : x ).join('')
  
  return [even , odd];
};



// other solutions
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

//

function capitalize(s) {
  const S = s.toUpperCase();
  let a = "";
  let b = "";
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      a += s[i];
      b += S[i];
    } else {
      a += S[i];
      b += s[i];
    }
  }
  return [a, b];
}

//

function capitalize(s) {
  return [
    [...s].map((x, i) => (i % 2 == 0 ? x.toUpperCase() : x)).join(""),
    [...s].map((x, i) => (i % 2 != 0 ? x.toUpperCase() : x)).join(""),
  ];
}




// test

describe("Basic tests", function () {
  Test.assertDeepEquals(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
  Test.assertDeepEquals(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
  Test.assertDeepEquals(capitalize("abracadabra"), [
    "AbRaCaDaBrA",
    "aBrAcAdAbRa",
  ]);
  Test.assertDeepEquals(capitalize("codewarriors"), [
    "CoDeWaRrIoRs",
    "cOdEwArRiOrS",
  ]);
});