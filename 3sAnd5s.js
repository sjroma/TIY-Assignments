function threeFive(num){
  let sum = 0;
  for(i = 0; i < num; i++){
    if( i % 3 === 0 || i % 5 === 0){
      sum = sum + i;
    }
  }
  return sum;
}
console.log(threeFive(1000));