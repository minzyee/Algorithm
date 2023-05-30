// 문제
// 현수의 아빠는 제과점을 운영합니다.
// 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다.
// 이때 K=3이면, 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// 1. 12 + 15 + 11 = 38
// sum = sum + arr[i] - arr[i - k]
// 2. 38 + 20 - 12 = 46
// 3. 46 + 25 - 15 = 56 ...

function solution(k, arr) {
	let answer = 0;
	let sum = 0;

	// 초기에 원소 k개 더하는 구간. 여기서 구한 값을 아래의 for문에 적용할 수 있다.
	for (let i = 0; i < k; i++) {
		sum += arr[i]; // 처음에 12 + 15 + 11 = 38이 담긴다.
	}
	answer = sum;

	// i는 인덱스 3부터 시작하며 증가한다.
	for (let i = k; i < arr.length; i++) {
		// sum에 더해둔 3개의 값에 arr[3]은 더하고, arr[3-3]은 빼는 방식으로 진행한다.
		sum += arr[i] - arr[i - k]; // 38 + (20 - 12)
		answer = Math.max(answer, sum); // answer와 sum을 비교해서 더 큰 값을 answer에 담는다.
	}
	return answer;
}

console.log(solution(3, arr));
