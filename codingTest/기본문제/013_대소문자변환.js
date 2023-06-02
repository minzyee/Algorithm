// 문제
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아
// 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

// 나의 풀이
// 해당 문자열이 대문자면, 변수 answer에 소문자로 변환 후 담고,
// 해당 문자열이 대문자가 아니면(소문자면), 변수 answer에 대문자로 변환 후 담아라.
let string = "StuDY";
function solution(string) {
	let answer = "";
	for (let x of string) {
		if (x === x.toUpperCase()) answer += x.toLowerCase();
		else answer += x.toUpperCase();
	}
	return answer;
}

console.log(solution(string));
