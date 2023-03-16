// my solution
function lookAndSay(data, len) {
  return Array.from(
    { length: len },
    (v, i) => (data = data.replace(/(.)\1*/g, (m) => m.length + m[0]))
  );
}



// other solutions

function lookAndSay(data, len) {
  function next(token) {
    return "" + token.length + token[0];
  }
  function process() {
    return (data = data
      .match(/(\d)\1*/g)
      .map(next)
      .join(""));
  }
  return Array.apply(0, Array(len)).map(process);
}

//


const lookAndSay = (data, len) => {
  if (len === 0) return [];

  let result = "";
  let countRepeat = 1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {
      countRepeat++;
    } else {
      result += `${countRepeat}${data[i]}`;
      countRepeat = 1;
    }
  }

  return [result, ...lookAndSay(result, len - 1)];
};

//

function lookAndSay(data, len, arr = []) {
  if (len == 0) {
    return arr;
  }

  var count = 1;
  var newStr = "";

  for (var i = 0; i < data.length; i++) {
    if (data[i] == data[i + 1]) {
      count++;
    } else {
      newStr += count + data[i];
      count = 1;
    }
  }

  arr.push(newStr);

  return lookAndSay(newStr, len - 1, arr);
}

//

const lookAndSay = (rows, len) => {
  let row;

  // first recursive call
  if (!Array.isArray(rows)) {
    row = rows;
    rows = [];
  }

  // if done
  if (len == 0) return rows;

  // init char array of row before
  let lastRowArray = Array.from(row != null ? row : rows[rows.length - 1]);

  // row to generate
  row = "";

  // while there are chars to process
  while (lastRowArray.length > 0) {
    // count occurances of first char
    let count = 0;
    while (lastRowArray[0] === lastRowArray[count]) {
      count++;
    }

    // add count and char to row
    row += count;
    row += lastRowArray[0];

    // remove processed chars
    lastRowArray.splice(0, count);
  }
  // make recursive call for next row
  return lookAndSay([...rows, row], len - 1);
};

// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    result = ["11", "21", "1211", "111221", "312211"];
    Test.assertEquals(lookAndSay("1", 5).join(","), result.join(","));

    result = [
      "11121519",
      "311211151119",
      "13211231153119",
      "1113122112132115132119",
      "31131122211211131221151113122119",
    ];
    Test.assertEquals(lookAndSay("1259", 5).join(","), result.join(","));
  });
});
