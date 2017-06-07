function sequence(num){
  let fibonacciArray = [0], sumArray = [0], previousNumber = 0, nextNumber = 1;

  while (nextNumber <= num) {
    let transitionalNumber = previousNumber
    previousNumber = nextNumber
    nextNumber = transitionalNumber + nextNumber
    fibonacciArray.push(previousNumber)
  }

  for (let i = 0; i < fibonacciArray.length; i++) {
    if(fibonacciArray[i] % 2 === 0) {
      sumArray.push(fibonacciArray[i]);
    }
  }

  return sumArray.reduce((a, b) => a + b, 0);
}

console.log(sequence(4000000));