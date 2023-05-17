// my solution

// Number functions
function zero(operation) {
  if (operation) {
    return operation(0);
  }
  return 0;
}

function one(operation) {
  if (operation) {
    return operation(1);
  }
  return 1;
}

function two(operation) {
  if (operation) {
    return operation(2);
  }
  return 2;
}

function three(operation) {
  if (operation) {
    return operation(3);
  }
  return 3;
}

function four(operation) {
  if (operation) {
    return operation(4);
  }
  return 4;
}

function five(operation) {
  if (operation) {
    return operation(5);
  }
  return 5;
}

function six(operation) {
  if (operation) {
    return operation(6);
  }
  return 6;
}

function seven(operation) {
  if (operation) {
    return operation(7);
  }
  return 7;
}

function eight(operation) {
  if (operation) {
    return operation(8);
  }
  return 8;
}

function nine(operation) {
  if (operation) {
    return operation(9);
  }
  return 9;
}

// Mathematical operation functions
function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}


// other solutions

function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(n) {
  return function (v) {
    return v + n;
  };
}
function minus(n) {
  return function (v) {
    return v - n;
  };
}
function times(n) {
  return function (v) {
    return v * n;
  };
}
function dividedBy(n) {
  return function (v) {
    return v / n;
  };
}

//

const zero = (a) => (a ? a(0) : 0);
const one = (a) => (a ? a(1) : 1);
const two = (a) => (a ? a(2) : 2);
const three = (a) => (a ? a(3) : 3);
const four = (a) => (a ? a(4) : 4);
const five = (a) => (a ? a(5) : 5);
const six = (a) => (a ? a(6) : 6);
const seven = (a) => (a ? a(7) : 7);
const eight = (a) => (a ? a(8) : 8);
const nine = (a) => (a ? a(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;

//

const [zero, one, two, three, four, five, six, seven, eight, nine] = [
  ...Array(10),
].map((_, idx) => (fn) => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(
  (val) => new Function(`b`, `return a => a ${val} b ^ 0`)
);

//





// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times(five())), 35);
    assert.strictEqual(four(plus(nine())), 13);
    assert.strictEqual(eight(minus(three())), 5);
    assert.strictEqual(six(dividedBy(two())), 3);
  });
});
