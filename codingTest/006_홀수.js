// 문제
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
// 이들 중 홀수는 77, 41, 53, 85이므로
// 그 합은 77 + 41 + 53 + 85 = 256 이 되고,
// 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

// 나의 풀이
let arr = [12, 77, 38, 41, 53, 92, 85];
let oddArr = []; // 홀수만 담은 배열
let oddSum = 0; // 홀수들의 합
let oddMin = 0; // 홀수 중의 최소값
let answer = [];

function solution(arr) {
	// 배열 arr에서 홀수만 걸러내는 반복문.
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			oddArr.push(arr[i]); // [77, 41, 53, 85]
		}
		// 걸러낸 홀수들 중에서 최소값을 구한다.
		oddMin = Math.min(...oddArr); // 최소값: 41
	}

	// 필터링 된 홀수의 개수 만큼 반복문을 돌린다.
	// 변수 oddSum에 홀수를 누적하여 합한다.
	for (let j = 0; j < oddArr.length; j++) {
		oddSum += oddArr[j];
	}
	answer.push(oddMin);
	answer.push(oddSum);

	// console.log(oddArr); // [77, 41, 53, 85]
	// console.log("총합: ", oddSum);
	// console.log("최솟값: ", oddMin);
	return answer;
}

console.log(solution(arr));

// 해답
function solution1(arr) {
	let answer = [];
	let sum = 0;
	let min = Number.MAX_SAFE_INTEGER;
	for (let x of arr) {
		// 홀수만 필터링한다.
		if (x % 2 === 1) {
			sum += x; // 홀수들의 합을 구한다.
			if (x < min) min = x; // x가 min 보다 작으면 min에 x를 할당한다.
		}
	}
	answer.push(sum);
	answer.push(min);

	return answer;
}

console.log("해답: ", solution1(arr));
