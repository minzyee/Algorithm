// 문제: 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 몫: 5  나머지: 0

let inputNum = prompt("숫자 두개를 띄어 쓰세요.").split(" "); // ["10", "2"]
let share = Math.floor(parseInt(inputNum[0], 10) / parseInt(inputNum[1], 10));
let remainder = parseInt(inputNum[0], 10) % parseInt(inputNum[1], 10);

console.log(share, remainder);
