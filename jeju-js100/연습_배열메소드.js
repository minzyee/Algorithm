// forEach
const func1 = (e, index) => {
  console.log(`${index}번째 요소는 ${e}`);
}
const a = [1, 2, 3, 4, 5].forEach(func1);
console.log(a); // undefined


// map
const func2 = (e, index) => e * 2;
const b = [1, 2, 3, 4, 5].map(func2);
console.log(b); // [ 2, 4, 6, 8, 10 ]


// reduce
const func3 = (prev, curr, index, initialValue) => prev + curr;
const c = [1, 2, 3, 4, 5].reduce(func3);
console.log(c); // 15



// filter
const func4 = e => e % 2;
const d = [1, 2, 3, 4, 5].filter(func4);
console.log(d); // [ 1, 3, 5 ]