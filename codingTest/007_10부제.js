// 문제
// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
// 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.
// 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.

// 날짜의 일의 자리 숫자에 해당하는 자동차 일의 자리 번호는 운행하지 못한다.
// 운행하지 못하는 자동차의 대수를 세라.

let day = 3; // 오늘이 3일이면
let carNumber = [25, 23, 11, 47, 53, 17, 33]; // 일의 자리와 일치하는 차량 찾기
// day = 0;
// carNumber = [12, 20, 54, 30, 87, 91, 30];
let ban = []; // 운행 금지

function solution(day, carNumber) {
	for (let i = 0; i < carNumber.length; i++) {
		let stringArr = carNumber[i].toString();
		if (stringArr.indexOf(day) === 1) {
			ban.push(stringArr);
		}
	}
	return ban;
}

console.log(solution(day, carNumber));

// 문제를 풀면서 알게된 것
// day가 언제나 3이거나 0이지 않으니까, 유동적으로 day를 사용할 수 있게 만들어야했다.
// 그래서 강사님 풀이에서 if (x % 10 === day)를 한 것이구나 !

// 해답
function solution(day, arr) {
	let answer = 0;
	// x가 arr의 각 원소가 된다.
	for (let x of arr) {
		// 각 원소를 10으로 나눴을 때, 호출 함수의 인자에 입력한 day와 일치하면 answer에 1씩 추가한다.
		if (x % 10 === day) answer++; // 어떤 숫자든 10으로 나누면 일의자리가 나머지가 된다.
	}

	return answer;
}

// day는 해당 함수를 호출할 때, 인자에서 설정해야하니까.
console.log(solution(3, arr));
