// 문제
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 나의 풀이
let string = "ksekkset";
function solution(string) {
	let answer = ""; // answer를 빈 문자열로 초기화 한다.
	let repeat = new Set(string); // Set 메서드를 사용하여 반복되는 문자열을 제거했다.
	for (let value of repeat) {
		// for of 반복문을 사용하여 각 문자열을 뽑아내서
		answer += value; // answer에 모두 할당해주었다.
	}
	return answer;
}

console.log(solution(string));
