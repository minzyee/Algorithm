// 문제
// N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

// arr[행][열]
let arr = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];

function solution(arr) {
	let answer = Number.MIN_SAFE_INTEGER;
	let n = arr.length;
	// sum1 행의 합, sum2 열의 합
	let sum1 = (sum2 = 0);

	// 행 탐색과 열 탐색을 이중 for문으로 실행한다.
	for (let i = 0; i < n; i++) {
		sum1 = sum2 = 0;
		for (let j = 0; j < n; j++) {
			sum1 += arr[i][j]; // i가 고정
			sum2 += arr[j][i];
		}
		answer = Math.max(answer, sum1, sum2);
	}

	// 초기화 작업
	sum1 = sum2 = 0;

	// 대각선의 합 구하기
	for (let i = 0; i < n; i++) {
		sum1 += arr[i][i]; // (0,0) (1,1) (2,2)...를 이용해 대각선을 구할 수 있다.
		sum2 += arr[i][n - i - 1]; // 위의 대각선과 반대되는 대각선이다.
	}
	answer = Math.max(answer, sum1, sum2);

	return answer;
}

console.log(solution(arr));
