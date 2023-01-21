// my solution

function nextBigger(n) {
  //your code here
  var numArr = n.toString().split("").map(Number);
  var i = numArr.length - 1;
  while (i > 0 && numArr[i - 1] >= numArr[i]) {
    i--;
  }
  if (i === 0) {
    return -1;
  }
  var j = numArr.length - 1;
  while (numArr[j] <= numArr[i - 1]) {
    j--;
  }
  var temp = numArr[i - 1];
  numArr[i - 1] = numArr[j];
  numArr[j] = temp;
  j = numArr.length - 1;
  while (i < j) {
    temp = numArr[i];
    numArr[i] = numArr[j];
    numArr[j] = temp;
    i++;
    j--;
  }
  return parseInt(numArr.join(""));
}


// other solutions
function nextBigger(n) {
  console.log(n);
  var chars = n.toString().split("");
  var i = chars.length - 1;
  while (i > 0) {
    if (chars[i] > chars[i - 1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length - 1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length - 1] = suf[i];
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(""));
  console.log("->" + num);
  return num;
}

//

const sortedDigits = (n) => {
  let arr = n.toString().split("");
  arr.sort((a, b) => b - a);
  return arr;
};

function nextBigger(n) {
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(""), 10);

  for (var i = n + 1; i <= max; i++) {
    if (sortedDigits(i).every((x, j) => x === arr[j])) {
      return i;
    }
  }

  return -1;
}

//

function nextBigger(n) {
  var arr = n.toString().split("").reverse();
  var i = arr.findIndex((d, _i) => d < arr[_i - 1]);
  if (i === -1) {
    return -1;
  }
  var subarr = arr.slice(0, i);
  var j = subarr.findIndex((d) => d > arr[i]);
  subarr.splice(j, 1, arr[i]);
  return parseInt(
    arr
      .slice(i + 1)
      .reverse()
      .concat(arr[j])
      .concat(subarr)
      .join("")
  );
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(nextBigger(12), 21);
    Test.assertEquals(nextBigger(513), 531);
    Test.assertEquals(nextBigger(2017), 2071);
    Test.assertEquals(nextBigger(414), 441);
    Test.assertEquals(nextBigger(144), 414);
  });
});
