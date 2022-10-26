// forEach 연습
// 배열의 각각 요소를 이용하여 어떤 작업을 하거나 변경시킬 때 사용한다.

// 방법1
const a1 = [1, 2, 3, 4, 5]
a1.forEach((item, index) => {
  console.log(`${index}는 ${item}번입니다.`);
});


// 방법2
const a2 = [1, 2, 3, 4, 5].forEach(func1);
function func1(item, index) {
  return console.log(`${index}는 ${item}번입니다.`);
}


// 방법3
const func11 = (e, index) => {
  console.log(`${index}번째 요소는 ${e}`);
}
const a3 = [1, 2, 3, 4, 5].forEach(func11);