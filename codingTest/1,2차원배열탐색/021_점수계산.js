// 문제
// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다.
// 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ...,
// K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.

// 1. 지금 O인지 X인지를 현재 점수를 담고있는 변수가 하나 필요하고
// 2. 지금 문제를 맞히면(O), +1 점 해주고
// 3. 지금 문제를 틀리면(X), +0 점을 해준다.

// 나의 풀이
let marking = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(marking) {
	let answer = 0;
	let count = 0; // 문제를 맞췄을 때와 못맞췄을 때, 카운드 하는 변수

	for (let score of marking) {
		if (score === 1) {
			count++; // 1을 만나면 count를 +1 해준다.
			answer += count; // count된 값을 answer에 더해서 할당해준다.
		} else {
			count = 0; // 0을 만나면 count를 다시 0으로 초기화 해준다.
		}
	}

	return answer; //
}

console.log(solution(marking));
