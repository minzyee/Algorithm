// 문제
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 18 ==> 1 + 8 = 9 ==> 18 % 9 === 0 (true)
// 12 ==> 1 + 2 = 3 ==> 12 % 3 === 0 (true)
// 11 ==> 1 + 1 = 2 ==> 11 % 2 === 0 (false)
// 13 ==> 1 + 3 = 4 ==> 13 % 4 === 0 (false)

// 나의 풀이
function solution(x) {
	let sum = 0;
	let arrNum = String(x).split(""); // ['1', '8']

	for (let i = 0; i < arrNum.length; i++) {
		sum += Number(arrNum[i]); // 1 + 8
	}

	return x % sum === 0 ? true : false;
}

// 나의 풀이2
function solution2(x) {
	let sum = String(x)
		.split("")
		.reduce((a, c) => a + Number(c), 0);

	return x % sum === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
