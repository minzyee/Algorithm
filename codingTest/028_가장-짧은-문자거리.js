// 문제(완전탐색)
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 '최소거리'를 출력하는 프로그램을 작성하세요.
// s: 문자열 -------> teachermode
// t: 하나의 문자 ---> e

// 나의 풀이
// 0 1 2 3 4 5 6 7 8 9 10 // 문자열의 인덱스
// t e a c h e r m o d e // 문자열
// 1 0 1 2 1 0 1 2 2 1 0 // e와의 최소거리

// 만약에 count가 몇 이상이 되면 다시 0부터 센다. 라는 기준을 어떻게 만들어야하지?
// 앞에서 e를 쟀을때와 뒤에서 e를 쟀을 때를 비교해야하나?

let string = "teachermode";
let word = "e";
function solution(string, word) {
	let answer = [];
	let count = 1000;

	// 왼쪽에서 부터 문자열 거리 재기
	for (let x of string) {
		if (x === word) {
			count = 0; // string의 문자와 word가 일치하면 answer에 0을 push한다.
			answer.push(count);
		} else {
			count++;
			answer.push(count);
		}
	}

	// 오른쪽에서 부터 문자열 거리 재기
	// e랑 일치하는 건 앞의 for문에서 계산했기 때문에 사실상 오른쪽에서 부터 거리를 잴 때 더 작은 숫자를 비교해 찾는 과정이다.
	count = 1000;
	for (let i = string.length - 1; i >= 0; i--) {
		if (string[i] === word) {
			count = 0;
		} else {
			count++;
			answer[i] = Math.min(answer[i], count); // answer[i]와 count 중 작은 값을 answer에 담는다.
		}
	}

	return answer;
}
console.log(solution(string, word));

// 해답
let s = "teachermode";
let t = "e";
function solution1(s, t) {
	let answer = [];
	let p = 1000;

	// 왼쪽에서 부터 문자열 거리 재기
	for (let x of s) {
		if (x === t) {
			p = 0;
			answer.push(p);
		} else {
			p++;
			answer.push(p);
		}
	}

	// 오른쪽에서 부터 문자열 거리 재기
	p = 1000;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === t) {
			p = 0;
		} else {
			p++;
			answer[i] = Math.min(answer[i], p);
		}
	}
	return answer;
}

console.log(solution1(s, t));
