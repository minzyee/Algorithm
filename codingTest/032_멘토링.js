// 문제
// 멘토(도와주는 사람), 멘티(도움 받는 사람)
// --> (멘토, 멘티)
// m번의 수학 테스트를 통해 등수를 가지고 멘토와 멘티를 정한다.
// 멘토의 조건: 멘티 보다 모든

let arr = [
	// [4, 3],
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];

function solution(test) {
	let answer = 0;
	m = test.length;
	n = test[0].length;

	for (let i = 1; i <= n; i++) {
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

console.log(solution(arr));
