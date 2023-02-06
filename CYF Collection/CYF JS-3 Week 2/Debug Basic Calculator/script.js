// my solution

var calculate = function calculate(a, o, b) {
 
 if(o === "+") { 
   return a + b;
   }
 if(o === "-") {
     return a - b;
   }
 if(o === "/" && b !== 0) { 
   return a / b;
   }
 if(o === "*") {
   return a * b;
 }
 
 return null; 
}


// other solutions
const calculate = (a, op, b) => {
	switch (op) {
		case "+": return a + b
		case "-": return a - b
		case "*": return a * b
		case "/": return b ? a / b : null
	}

	return null
}

//

var calculate = function calculate(a, o, b) {
 var result = null;
 
 if(o === "+") { 
   result = a + b;
 } else if(o === "-") {
   result = a - b;
 } else if(o === "/") { 
   result = (b === 0 ? null : a/b);
 } else if(o === "*") {
   result = a * b;
 }
 
 return result; 
}




// test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(calculate(2,"+", 4), 6);
Test.assertEquals(calculate(6,"-", 1.5), 4.5);
Test.assertEquals(calculate(-4,"*", 8), -32);
Test.assertEquals(calculate(49,"/", -7), -7);
Test.assertEquals(calculate(8,"m", 2), null);
Test.assertEquals(calculate(4,"/",0), null);
  });
});
