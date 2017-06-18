// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, 
// find the sum of the even-valued terms.
// run in repl.it


fibArray = [1,2];

var evenCounter = 0;

for (var i = 1; i < 100; i++){
  fibArray.push(fibArray[i]+fibArray[i-1]);
  if (fibArray[i] % 2 === 0 && fibArray[i] <= 4000000){
    evenCounter += fibArray[i];
  }
  if (fibArray[fibArray.length-1] >= 4000000){
    break;
  }
}

console.log(fibArray);
console.log(evenCounter);