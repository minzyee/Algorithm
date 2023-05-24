// 문제
// N(1<=N<=100)명의 학생의 국어점수가 입력되면
// 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

// 1. 처음에는 87점이 1등이겠지?
// 2. 그다음 번의 점수랑 비교한 뒤에 현재 점수보다 다음 점수가 크면 1등을 넘겨주고,
// 3. 현재 점수보다 다음 점수가 작으면 그대로 2등을 준다.

// 나의 풀이
let arr = [87, 89, 92, 100, 76];
function solution(arr) {
	let answer = [];
	let sortArr = [...arr].sort((a, b) => b - a);

	for (let i = 0; i < arr.length; i++) {
		answer.push(sortArr.indexOf(arr[i]) + 1);
	}
	return answer;
}
console.log(solution(arr));

// 해답
function solution1(arr) {
	let answer = Array.from({ length: arr.length }, () => 1);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				answer[i]++;
			}
		}
	}
	return answer;
}

console.log(solution1(arr));
