// 문제
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

let string = ["teacher", "time", "student", "beautiful", "good"];

function solution(string) {
	let answer = "";
	let max = Number.MIN_SAFE_INTEGER; // 가장 작은 정수로 초기화한다.
	for (let x of string) {
		if (x.length > max) {
			max = x.length;
			answer = x;
		}
	}

	return answer;
}

console.log(solution(string));
