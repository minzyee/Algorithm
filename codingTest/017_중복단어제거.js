// 문제
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

// 나의 풀이
let string = ["good", "time", "good", "time", "student"];
function solution(string) {
	let answer = "";
	let repeat = new Set(string);

	for (let word of repeat) {
		// console.log(word);
		answer = word;
	}
	return answer;
}

console.log(solution(string));
