// 문제
// 멘토의 조건: 멘티 보다 모든 등수가 앞서야한다.
// 멘토(도와주는 사람), 멘티(도움 받는 사람) --> (멘토, 멘티)
// A학생이 B학생보다 m번의 테스트 모두 등수가 높아야한다.
// A학생의 인덱스가 B학생의 인덱스보다 더 작은 숫자여야한다.
// m, n은 각각 테스트 횟수, 학생 수를 의미한다.

let arr = [
	[3, 4, 1, 2], // 0행
	[4, 3, 2, 1], // 1행
	[3, 1, 4, 2], // 2행
];

function solution(test) {
	let answer = 0;
	let tmp = []; // 멘토-멘티 테스트하기
	m = test.length; // 테스트 횟수
	n = test[0].length; // 학생 수(어차피 1~4등으로 4명이 끝이기 때문에 0으로 고정했다.)

	// 멘토 for문(4명으로 반복 횟수는 4회)
	for (let i = 1; i <= n; i++) {
		// 멘티 for문(4명으로 반복 횟수는 4회)
		for (let j = 1; j <= n; j++) {
			let count = 0; // 매 테스트 들어가기 전에 멘토-멘티가 정해지고 나면 count 초기화

			// k는 시험 횟수 for문
			for (let k = 0; k < m; k++) {
				let pi = 0;
				let pj = 0;
				// s는 등수 for문
				for (let s = 0; s < n; s++) {
					if (test[k][s] === i) pi = s; // k번째 시험에서 s위치에 i학생이 있다면, pi의 등수는 s이다.
					if (test[k][s] === j) pj = s; // k번째 시험에서 s위치에 j학생이 있다면, pj의 등수는 s이다.
				}

				// 이곳에서 1등 === 1등, 2등 === 2등 이런 경우를 조건에서 걸러준다.
				if (pi < pj) count++; // 반복문을 한 턴 돌았을 때 멘토-멘티가 성립되면 count를 업한다.
			}
			// count라는 값은 테스트 횟수와 동일해야한다. (pi < pj)의 조건을 모두 만족해야하기 때문이다.
			if (count === m) {
				tmp.push([i, j]);
				answer++;
			}
		}
	}
	console.log(tmp);
	return answer;
}
console.log(solution(arr));

function solution1(test) {
	let answer = 0; // 멘토 멘티가 될 수 있는 횟수
	m = test.length; // 테스트 횟수
	n = test[0].length; // 학생 수

	// 멘토 for문
	for (let i = 1; i <= n; i++) {
		// 멘티 for문
		for (let j = 1; j <= n; j++) {
			let cnt = 0;
			for (let k = 0; k < m; k++) {
				let pi = (pj = 0);
				for (let s = 0; s < n; s++) {
					if (test[k][s] === i) pi = s;
					if (test[k][s] === j) pj = s;
				}
				if (pi < pj) cnt++;
			}
			if (cnt === m) answer++;
		}
	}

	return answer;
}

// console.log(solution1(arr));
