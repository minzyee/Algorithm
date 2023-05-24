// 문제
// A, B 두 사람이 가위바위보 게임을 합니다.
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

// 나의 풀이
// 1. a와 b가 무승부일 때
// 2. a가 모두 이기는 경우를 조건으로 셋팅한다.
// 3. 그 이외의 경우(B가 이긴 경우)를 조건으로 만든다.
function solution(n, a, b) {
	let answer = "";
	for (let i = 0; i < n; i++) {
		if (a[i] === b[i]) {
			answer += "D";
		} else if (a[i] === 1 && b[i] === 3) {
			answer += "A";
		} else if (a[i] === 2 && b[i] === 1) {
			answer += "A";
		} else if (a[i] === 3 && b[i] === 2) {
			answer += "A";
		} else {
			answer += "B";
		}
	}
	return answer;
}

console.log(solution(5, a, b));

// 해답
// 경우를 따지는 문제를 풀 때는 한 가지의 조건을 기준잡아라.
// 예) A가 이기는 경우를 기준 잡기
function solution1(a, b) {
	let answer = "";
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) answer += "D";
		else if (a[i] === 1 && b[i] === 3) answer += "A";
		else if (a[i] === 2 && b[i] === 1) answer += "A";
		else if (a[i] === 3 && b[i] === 2) answer += "A";
		else answer += "B";
	}
	return answer;
}

console.log(solution1(a, b));
