// reduce 연습
// 배열을 통해 하나의 계산된 값을 추출해낼 때 사용한다.

// 방법1
const func3 = (prev, curr, index, initialValue) => prev + curr;
const c = [1, 2, 3, 4, 5].reduce(func3);
console.log(c); // 15