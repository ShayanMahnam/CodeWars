// my solution

function binToDec(bin) {
  // ...
  let decimal = 0;
  let power = bin.length - 1;
  for (let digit of bin) {
    decimal += parseInt(digit) * Math.pow(2, power);
    power--;
  }
  return decimal;
}


// other solutions
function binToDec(bin) {
  return parseInt(bin, 2);
}

//

const binToDec = (bin) => parseInt(bin, 2);

//

const binToDec = (bin) => [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);


// test

describe("Example Tests", () => {
  [
    ["1", 1],
    ["0", 0],
    ["1001001", 73],
  ].forEach(([inp, exp]) => Test.assertEquals(binToDec(inp), exp));
});
