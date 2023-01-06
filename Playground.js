function nbDig(n, d) {
  let k = 0 
  let arr = []
   for(let i = 0; i <= n; i++){
     arr.push(i ** 2);  
   }
    arr
     .filter((x) => x.toString().includes(d))
     .join("")
     .split('')
     .forEach((x) => (x == d ? k++ : null));
    return k
}

console.log(nbDig(5750,0));