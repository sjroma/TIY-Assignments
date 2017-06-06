fibArray = [1,2];

var evenCounter = 0;

for (var i = 1; i < 1000000; i++){
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