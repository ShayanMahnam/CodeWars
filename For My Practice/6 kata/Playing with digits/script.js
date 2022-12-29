// my solution

function digPow(n, p) {
  let string = n.toString();
  let len = string.length;
  let result = 0;
  for (var i = 0; i < len; i++) {
    var numberser = parseInt(string.charAt(i), 10);
    result += Math.pow(numberser, p + i);
  }
  var x = Math.pow(n, p);
  if (result === x) {
    return p;
  } else if (result % n === 0) {
    return result / n;
  } else {
    return -1;
  }
}


// other solutions

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

//

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}//z.

///

function digPow(n, p) {
  // ...
  var num1 = n.toString();
  var num2 = p.toString();
  var sum = 0;

  for (var i = 0; i < num1.length; i++) {
    sum = sum + Math.pow(parseInt(num1.charAt(i)), p);
    p++;
    if (sum % n == 0) {
      return sum / n;
    }
  }
  return -1;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(digPow(89, 1), 1);
    Test.assertEquals(digPow(92, 1), -1);
    Test.assertEquals(digPow(46288, 3), 51);
  });
});
