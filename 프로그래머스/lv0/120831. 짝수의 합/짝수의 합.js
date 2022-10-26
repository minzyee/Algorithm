function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
      sum += i;
      // console.log(i);
    }
  }
  return sum;
}

console.log(solution(10));
console.log(solution(4));