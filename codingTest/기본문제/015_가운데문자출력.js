// 문제
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// 나의 풀이
// 문자열의 길이를 파악한다.
// let string = "study"; --> u
// let string = 'good';  --> oo
let string = "abcd"; // bc
function solution(string) {
	let answer = "";
	let find = Math.floor(string.length / 2);

	if (string.length % 2 === 1) {
		answer = string[find];
	} else {
		answer = string[find - 1] + string[find];
	}

	return answer;
}

console.log(solution(string));
