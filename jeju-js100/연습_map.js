// map 연습
// 배열을 이용해 조건에 맞는 원소로 배열을 만들 때 사용한다.

// 방법1: 배열의 각 요소에 *2 해주기
const func2 = (e, index) => e * 2;
const b1 = [1, 2, 3, 4, 5].map(func2);
console.log(b1);


// 방법2
const b2 = [1, 2, 3, 4, 5];
const func22 = b2.map((item, index) => item * 2);
console.log(func22);


// 방법3
const b3 = [1, 2, 3, 4, 5].map((item, index) => item * 2);
console.log(b3);