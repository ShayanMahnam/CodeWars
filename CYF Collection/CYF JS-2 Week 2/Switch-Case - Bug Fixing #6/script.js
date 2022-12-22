// my solution

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      return (result = value.a + value.b);
    case "-":
      return (result = value.a - value.b);
    case "/":
      return (result = value.a / value.b);
    case "*":
      return (result = value.a * value.b);
    case "%":
      return (result = value.a % value.b);
    case "^":
      return (result = Math.pow(value.a, value.b));
  }
  return result;
}


// other solutions


function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

//

const evalObject = (value) =>
  ({
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "%": (a, b) => a % b,
    "^": Math.pow,
  }[value.operation](value.a, value.b));


//

testdescribe('Fixed Tests', () => {
  Test.assertEquals(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
  Test.assertEquals(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');
});
