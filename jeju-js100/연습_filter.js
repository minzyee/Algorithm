// filter 연습
// 배열을 이용해 조건에 맞는 원소로 배열을 마들 때 사용한다.
// 조건에 맞는 원소들을 걸러낸다.
// 원본 배열을 훼손하지 않는다.

// 방법1
const func4 = e => e % 2;
const d = [1, 2, 3, 4, 5].filter(func4);
// console.log(d); // [ 1, 3, 5 ]


// 방법2 (3이랑 6만 필터링되서 걸러짐?)
const func44 = (item) => item % 3;
const dd = [1, 2, 3, 4, 5, 6].filter(func44);
console.log(dd);