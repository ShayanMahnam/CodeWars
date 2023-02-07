// my solution

function gap(num) {
    //code me
  let binary = num.toString(2)
   let maxGap = 0;
  let currentGap = 0;
  
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      currentGap++;
    } else {
      if (currentGap !== 0) {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      }
    }
  }
  
  return maxGap;
}


// other solutions

const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;

//

function gap(num) {
 	binary  = num.toString(2)
  zeros   = binary.match(/0+(?=1)/g) || ['']
  longest = zeros.sort().pop() 
  return longest.length
}

//

function gap(n) {
  const shift = n => n << Math.clz32(n) >>> 0;
  const gap = n => {
    let length = Math.clz32(~shift(~n)), next = shift(n << length);
    return next && length ? Math.max(length, gap(next)) : 0;
  }
  return gap(shift(n));
}

//

function gap(number) {
  const gaps = number.toString(2).match(/0+(?=1)/g);
  return gaps ? Math.max(...gaps.map(gap => gap.length)) : 0;
}



// test

describe('Freebies', function () {
  Test.assertEquals(gap(9),2);
  Test.assertEquals(gap(529),4);
  Test.assertEquals(gap(20),1);
  Test.assertEquals(gap(15),0);
});