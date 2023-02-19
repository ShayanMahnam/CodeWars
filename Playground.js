function disariumNumber(n) {
  let num = n
    .toString()
    .split("")
    .map((element) => Number(element));
  
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    
  
    result += Math.pow(parseInt(num[i]), i + 1);
  }
  return result === n;
}
let input1 = 175;
console.log(disariumNumber(input1));
